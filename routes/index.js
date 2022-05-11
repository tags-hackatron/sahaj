const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const { ensureAuthenticated } = require('../config/checkAuth')

// const Admission = require('../models/Admission');
const Appointment = require('../models/Appointment');
// const Complaint = require('../models/User');
// <<<<<<< HEAD
const complaint = mongoose.model('Appointment');
// const admission = mongoose.model('Admission');
// =======
// const Appointment = mongoose.model('Appointment');

// >>>>>>> 2d4499569453a1219a442dcc3041ee1d36faf216
//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('dash');
});

//------------ Dashboard Route ------------//
// router.get('/dashboard',ensureAuthenticated, (req, res) => res.render('dash'));
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));
router.get('/doctor', (req, res) => {


    res.render('doctor')
})

router.get('/adminlogin', (req, res) => res.render('adminlogin'))

router.get('/admin', ensureAuthenticated, async(req, res) => {
    await complaint.find()
        .then(data => {
            if (!data) console.log("Failed to retrive complaints");
            else {
                res.render("index", {
                    complainData: data
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erro retrieving user with id " })
        })
});

router.get('/admin/billing', ensureAuthenticated, (req, res) => res.render('billing', {
    name: req.user.name
}));

router.get('/admin/tables', ensureAuthenticated, async(req, res) => {
    await admission.find()
        .then(data => {
            if (!data) console.log("Failed to retrive complaints");
            else {
                res.render("tables", {
                    admissionData: data
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erro retrieving user with id " })
        })
});

router.post('/patient', (req, res) => {
    const Appoint = new Appointment();
    Appoint.date = req.body.date;
    Appoint.doctor = req.body.doctor;
    Appoint.message = req.body.message;
    Appoint.save()
        .then(user => {
            req.flash(
                'success_msg',
                'appointment filled successfully.'
            );
            console.log(user);
            res.redirect('/patient');
        })
        .catch(err => console.log(err));

});


router.post('/dataentry', (req, res) => {
    const dataentry = new dataentry();
    dataentry.aadharNumber = req.body.aadharNumber;
    dataentry.patientName = req.body.patientName;
    dataentry.report = req.body.report;
    dataentry.doctorName = req.body.doctorName;
    dataentry.hospitalName = req.body.hospitalName;
    dataentry.hospitalLocation = req.body.hospitalLocation;

    dataentry.medicine1 = req.body.medicine1;
    dataentry.forWhat1 = req.body.forWhat1;
    dataentry.startDate1 = req.body.startDate1;
    dataentry.tillDate1 = req.body.tillDate1;
    dataentry.morning1 = req.body.morning1;
    dataentry.afternoon1 = req.body.afternoon1;
    dataentry.night1 = req.body.night1;

    dataentry.medicine2 = req.body.medicine2;
    dataentry.forWhat2 = req.body.forWhat2;
    dataentry.startDate2= req.body.startDate2;
    dataentry.tillDate2 = req.body.tillDate2;
    dataentry.morning2 = req.body.morning2;
    dataentry.afternoon2 = req.body.afternoon2;
    dataentry.night2 = req.body.night2;

    
    dataentry.medicine3 = req.body.medicine3;
    dataentry.forWhat3 = req.body.forWhat3;
    dataentry.startDate3= req.body.startDate3;
    dataentry.tillDate3 = req.body.tillDate3;
    dataentry.morning3 = req.body.morning3;
    dataentry.afternoon3 = req.body.afternoon3;
    dataentry.night3 = req.body.night3;

    dataentry.diet = req.body.diet;


    dataentry.save()
        .then(user => {
            req.flash(
                'success_msg',
                'appointment filled successfully.'
            );
            console.log(user);
            res.redirect('/patient');
        })
        .catch(err => console.log(err));

});


// router.get('/admission', ensureAuthenticated, (req, res) => res.render('admission'));
router.get('/complaint', ensureAuthenticated, (req, res) => res.render('complaint'));

router.post('/admission', (req, res) => {
    const newAdmission = new Admission();
    newAdmission.name = req.body.name;
    newAdmission.email = req.body.email;
    newAdmission.phone = req.body.phone;
    newAdmission.prn = req.body.prn;
    newAdmission.cgpa = req.body.cgpa;
    newAdmission.department = req.body.department;
    newAdmission.address = req.body.address;
    newAdmission.caste = req.body.caste;
    newAdmission.year = req.body.year;
    newAdmission.gender = req.body.gender;
    newAdmission.preference = req.body.preference;
    newAdmission.save()
        .then(user => {
            req.flash(
                'success_msg',
                'Admission form filled successfully.'
            );
            res.redirect('/dashboard');
        })
        .catch(err => console.log(err));
});

router.post('/complaint', (req, res) => {
    const newComplaint = new Complaint();
    newComplaint.subject = req.body.subject;
    newComplaint.complaint = req.body.complaint;
    newComplaint.save()
        .then(user => {
            req.flash(
                'success_msg',
                'Complaint filled successfully.'
            );
            res.redirect('/dashboard');
        })
        .catch(err => console.log(err));

});


router.post('/adminlogin', (req, res) => {
    if (req.body.email == "manojmetgud035@gmail.com" && req.body.password == "12345678") {
        req.flash(
            'success_msg',
            'Complaint filled successfully.'
        );
        res.redirect('admin');
    } else {
        res.redirect('adminlogin');
    }
    req.flash(
        'success_msg',
        'Login failed'
    );



});
const Razorpay = require("razorpay");
const dataentry = require('../models/dataentry');

const razorpay = new Razorpay({
    key_id: "rzp_test_nvhBWn23LWrMPJ",
    key_secret: "jSMCAAUtCl5G6wCZQPcuVWo2",
});
router.get("/pay", (req, res) => {
    res.render("razorpay.ejs");
});


router.post("/order", (req, res) => {
    // instance.orders.create({
    //   amount: 50000,
    //   currency: "INR",
    //   receipt: "receipt#1",
    //   notes: {
    //     key1: "value3",
    //     key2: "value2",
    //   },
    // });
    let options = {
        amount: 2000000,
        currency: "INR",
    };

    razorpay.orders.create(options, function(err, order) {
        res.json(order);
    });
});


//   enter into data form

router.get("/dataentry", (req, res) => {
    res.render("dataentry.ejs");
});
router.get("/patient", (req, res) => {
    res.render("patient.ejs");
});
router.get("/patientSearch", (req, res) => {
    res.render("patientSearch.ejs");
});
router.get("/doctorDetail", (req, res) => {
    res.render("doctorDetail.ejs");
});
module.exports = router;