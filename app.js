let mobiles = {
    Apple: {
        iphone13: {
            model: 'iphone 13',
            color: 'black',
            price: 10000,
            camera: 20,
            battery: '50 mah',
        },
        iphone12pro: {
            model: 'iphone 12pro',
            color: 'red',
            price: 800,
            camera: 15,
            battery: 400,
        },
        iphone11: {
            model: 'iphone 11',
            color: 'Golden',
            price: 90000,
            camera: 16,
            battery: 300,
        },
        iphoneXs: {
            model: 'iphone Xs',
            color: 'grey',
            price: 120000,
            camera: 17,
            battery: 600,
        }

    },
    Samsung: {
        Samsung: {
            model: 'Samsung S10',
            color: 'red',
            price: 500,
            camera: 10,
            battery: 600,
        },
        s11: {
            model: 'Samsung S11 ',
            color: 'blue',
            price: 688,
            camera: 65,
            battery: 275,
        },
        s12: {
            model: 'Samsung S12 ',
            color: 'white',
            price: 899,
            camera: 95,
            battery: 490,
        },
        s13: {
            model: 'Samsung S13 ',
            color: 'black',
            price: 999,
            camera: 70,
            battery: 550,
        }
    },
    Infinix: {
        Hot10: {
            model: 'Hot 10',
            color: 'blue',
            price: 30000,
            camera: 20,
            battery: 150,
        },
        note10s: {
            model: 'note 10s',
            color: 'blue',
            price: 30000,
            camera: 20,
            battery: 150,
        },
        note10: {
            model: 'Note 10 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
        note13pro: {
            model: 'note 13pro',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        },
    },

    Vivo: {
        VivoY25: {
            model: 'Vivo Y25',
            color: 'red',
            price: 50000,
            camera: 10,
            battery: 300,
        },
        VivoY22: {
            model: 'Vivo Y22',
            color: 'sky blue',
            price: 20000,
            camera: 10,
            battery: 300,
        },
        VivoY23: {
            model: 'Vivo Y23',
            color: 'blue',
            price: 30000,
            camera: 20,
            battery: 150,
        },
        VivoY24: {
            model: 'Vivo Y24',
            color: 'blue',
            price: 30000,
            camera: 20,
            battery: 150,
        }
    }
}


function demo() {
    let brandName = document.getElementById('brand-name').value
    let modelName = document.getElementById('model-name').value

    if (mobiles[brandName] !== undefined) {
        if (mobiles[brandName][modelName] !== undefined) {
            document.getElementById('para').innerHTML = JSON.stringify(mobiles[brandName][modelName]);
        }

        else {
            document.getElementById('para').innerHTML = 'This model is not available';
        }
    }
    else if (brandName == '' || modelName == '') {
        document.getElementById('para').innerHTML = 'Please Enter The BrandName Or Model';
    }
    else {
        document.getElementById('para').innerHTML = 'This model is not available';
    }

};