
const { TipoDeProfissional } = require("../models");

const { Op } = require("sequelize");


/**
 * Check params send to api
 * @param {object} bodyData 
 * @returns object or false
 */
const checkData = (bodyData) => {

    /*defaults fields of entity*/
    const params = {
        descricao: '',
        situacao: ''
    };

    let dataToSave = {};
    /*check if fields send is valid*/
    Object.keys(bodyData).forEach((param) => {
        if (param in params && bodyData[param] !== "") {
            dataToSave[param] = bodyData[param];
        }
    });

    const lengthKeys = Object.keys(dataToSave).length;

    return (lengthKeys == 2) ? dataToSave : false;
};

/**
 * Create professional type in db table
 * @param request req 
 * @param response res 
 */
const create = (req, res) => {

    const dataToSave = checkData(req.body);

    /*check if data send to router is ok*/
    if (dataToSave !== false) {

        /*Check if professional type already exists in db*/
        TipoDeProfissional.findOne({
            where: {
                descricao: dataToSave.descricao
            }
        }).then((result) => {
            if (result == null) {

                /*Create professional type in the db table*/
                TipoDeProfissional.create(dataToSave).then((result) => {
                    res.status(201).json({ success: "Professional type created" });
                }).catch((error) => {
                    res.sendStatus(500);
                });
            }
            else {
                res.status(400).json({ error: "Professional type exists" });;
            }
        }).catch((error) => {
            res.sendStatus(500);
        });
    }
    else {
        res.status(400).json({ error: "Malformated data" });
    }
};

/**
 * Update professional type in db table
 * @param request req 
 * @param response res 
 */
const update = (req, res) => {

    const id = req.params.id;

    const dataToSave = checkData(req.body);

    /*check if data send to router is ok*/
    if (dataToSave !== false) {

        /*update professional register*/
        TipoDeProfissional.update(dataToSave, {
            where: {
                id: id
            }
        }).then((result) => {

            /*verify total registers affecteds*/
            if (result > 0) {
                res.status(200).json({ success: "Professional type updated" });
            }
            else {
                res.status(404).json({ error: "Professional type not exists" });
            }
        }).catch((error) => {
            res.sendStatus(500);
        });
    }
    else {
        res.status(400).json({ error: "Malformated data" });
    }
};

const search = (req, res) => {

    /*defaults formateds fields to search*/
    const params = {
        descricao: { [Op.iLike]: `%${req.query.descricao}%` },
        situacao: { [Op.eq]: req.query.situacao }
    };

    let searchObj = {};
    /*parse e compare data send to router with defaults fields*/
    Object.keys(req.query).forEach((param) => {
        if (params[param]) {
            searchObj[param] = params[param];
        }
    });

    /*check if data is ok*/
    if (Object.keys(searchObj).length == 0) {
        res.status(400).json({ error: "Syntax search incorrect" });
        return;
    }

    /*perform search with data*/
    TipoDeProfissional.findAll({
        where: searchObj
    }).then((result) => {
        if (result.length > 0) {
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Search not found results" });
        }
    });
};


/**
 * Find one professional type by id
 * @param request req 
 * @param response res 
 */
const findOne = (req, res) => {

    const id = req.params.id || 0;

    TipoDeProfissional.findByPk(id).then((result) => {
        if (result == null) {
            res.status(404).json({ error: "Professional type not exists" });
        }
        else {
            res.json(result.dataValues);
        }
    }).catch((error) => {
        res.sendStatus(500);
    });
};

/**
 * Delete one professional type by id
 * @param request req 
 * @param response res 
 */
const deleteOne = (req, res) => {

    const id = req.params.id || 0;

    TipoDeProfissional.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.status(200).json({ success: "Professional type deleted" });
        }
        else if (result == 0) {
            res.status(404).send({ error: "Professional type not exists" });
        }
    }).catch((error) => {
        res.sendStatus(400);
    });
};

module.exports = {
    create,
    update,
    search,
    findOne,
    deleteOne
};