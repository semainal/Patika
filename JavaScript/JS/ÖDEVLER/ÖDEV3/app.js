const menu = [
    {
        id: 1,
    title: "Bıldırcın Dolması",
    category: "Osmanlı Mutfağı",
    price: 10.99,
    img: 
    "https://i.lezzet.com.tr/images-xxlarge-recipe/bildircin-dolmasi-tarifi-b9055800-10f9-4ddd-b9bb-7b8935547370.jpg",
    desc: `Osmanlı mutfağından günümüze kadar ulaşan bıldırcın dolması, pirinç, soğan, kuru üzüm ve bademli harçtan oluşur.`
    },

    {
        id: 2,
        title: "Yoğurtlu Sakızlı Tavuk",
        category: "Osmanlı Mutfağı",
        price: 9.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/yogurtlu-sakizli-tavuk-e4964132-1a27-4068-9967-bcb02960b265.jpg",
        desc: `Osmanlı döneminden bu yana yapılan sakızlı tavuk yemeği, damla sakızı ve tavuğun mükemmel uyumu ile damaklarda iz bırakıyor.`
    },

    {
        id:3,
        title: "Saray Yahnisi",
        category: "Osmanlı Mutfağı",
        price: 14.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/saray-yahnisi-6ba5d964-c0a3-40f0-9485-939a45f00abf.jpg",
        desc: `Saray yahnisi, isminden anlaşılacağı üzere saray mutfağının çok sevilen tariflerinden biridir. Arpacık soğan ve dana kuşbaşı ile hazırlanan bu yahni, yüksek oranda protein içerir.`
    },

    {
        id:4,
        title:"Şah Pilavı",
        category: "Osmanlı Mutfağı",
        price: 12.99,
        img:
        "https://i.lezzet.com.tr/images-xxlarge/sah-pilavi-86958102-da29-48ee-b76e-fa3d5564b0c3",
        desc:`Şah pilavı, Azerbaycan mutfağının yöresel lezzetlerinden biridir. Pilav yapımında kuzu eti, kestane, kuru kayısı, kuru üzüm ve safran kullanılır.`
    },

    {
        id: 5,
        title:"Kuru Domatesli Zahterli Foccacia",
        category: "İtalyan Mutfağı",
        price: 9.99,
        img:
         "https://i.lezzet.com.tr/images-xxlarge-recipe/kuru-domatesli-zahterli-foccacia-36d114eb-bfac-451c-922f-3f38ea33bb66.jpg",
        desc: `İtalya'nın meşhur zeytinyağlı ekmeği olan foccacia tarifini, bir de zahter ile denemelisiniz. Zahter, zeytinyağı ve domatesin uyumu, bir de yumuşak ekmek ile birleşince yenmeye doyum olmuyor.`
    },

    {
        id:6,
        title:"Cappelletti",
        category: "İtalyan Mutfağı",
        price: 7.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/cappelletti-20fc513b-511f-4378-ae34-ca4f6a80254f.jpg",
        desc: `Cappeletti, İtalya'nın en meşhur yemeklerinden olan makarnanın içi dolgulu bir versiyonu. `
    },

    {
        id:7,
        title: "Parmigiana",
        category:"İtalyan Mutfağı",
        price: 9.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/melanzane-alla-parmigiana-462b608f-d8a6-4289-9adf-c7bb2457973a.jpg",
        desc: `Kızarmış patlıcan dilimlerinin, domates sosu ve peynir ile kaplanarak pişirilmesiyle hazırlanan parmigiana, İtalyan yemeklerinden biridir.`
    },

    {
        id:8,
        title: "Çin Salatası",
        category: "Uzakdoğu Mutfağı",
        price: 10.99,
        img:
         "https://i.lezzet.com.tr/images-xxlarge-recipe/cin-salatasi-91ebd2a9-cdb6-4232-84f1-fc5c5aada271.jpg",
        desc: `Çin salatası, pirinç ve sebzelerin uyumu ile lezzetli bir soğuk salata çeşididir. Haşlanan kokulu yasmin pirinç ile uyumlu biber, turşu, soğan ve dereotunun yanında zeytinyağlı, limonlu su ile mükemmel bir salata. `
    },

    {
        id:9,
        title: "Khao Pad Sapparot",
        category: "Uzakdoğu Mutfağı",
        price: 10.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/khao-pad-sapparot-a630efee-903a-436a-aa1a-121c913c1b2a.jpg",
        desc: `Tayland mutfağının en lezzetli yemeklerinden biri olan khao pad sapparot, ananas içinde servis edilen bir yemektir. Yasemin pirinci, bezelye, kaju ve ananas ile hazırlanan bu yemek, isteğe göre karides veya tavukla zenginleştirilir. `
    },

    {
        id:10,
        title: "Jiaozi (Çin Mantısı)",
        category: "Uzakdoğu Mutfağı",
        price: 12.99,
        img: 
        "https://i.lezzet.com.tr/images-xxlarge-recipe/jiaozi-cin-mantisi-bf38e7d9-f47f-4ca5-826d-38f0cdd4d7db.jpg",
        desc: `Çin ve Doğu Asya ülkelerinde sık sık tüketilen Çin mantısı, kıyma ve sebze karışımıyla hazırlanır. Bu karışım hamur içine konularak pişirilir.` 
    }
];

// button ve menu seçimi

const btnDOM = document.querySelector(".btn-container");
const menuDOM = document.querySelector(".section-center");

// button oluşturma

function createButtons(e) {
    let allButtons = `
    <button id="all" type="button">All</button>
    <button id="osmanlı" type="button">Osmanlı Mutfağı</button>
    <button id="italyan" type="button">İtalyan Mutfağı</button>
    <button id="uzakdoğu" type="button">Uzakdoğu Mutfağı</button>  
    `

    btnDOM.innerHTML = allButtons;
}

createButtons();


// yemekleri oluşturma
const createFoods = (food) => {
    let html = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${food.title}</h4>
            <h4 class="price">${food.price}</h4>
          </div>
          <div class="menu-text">${food.desc}</div>
        </div>
      </div>  
    `
    return html;
  }

// ürünleri listeleme

function listAllFoods(e) {
    let allFoods = "";

    menu.map(item => {
        allFoods += createFoods(item)
    })

    menuDOM.innerHTML = allFoods;
}

document.addEventListener("DOMContentLoaded",listAllFoods);

// osmanlı mutfağı

const listOsmanli = () => {
    let osmanliFoods ="";

    menu.map(item => {
        if(item.category === "Osmanlı Mutfağı") {
            osmanliFoods += createFoods(item)
        }
    })
    menuDOM.innerHTML = osmanliFoods;
}

document.querySelector("#osmanlı").addEventListener("click",listOsmanli);


// italyan mutfağı
const listitalyan = () => {
    let italianFoods = "";

    menu.map(item => {
        if(item.category === "İtalyan Mutfağı") {
            italianFoods += createFoods(item)
        }
    })

    menuDOM.innerHTML = italianFoods;
}

document.querySelector("#italyan").addEventListener("click",listitalyan);

//uzakdoğu mutfağı
const listUzakdogu = () => {
    let uzakdoguFoods = "";

    menu.map(item => {
        if(item.category === "Uzakdoğu Mutfağı") {
            uzakdoguFoods += createFoods(item)
        }
    })

    menuDOM.innerHTML = uzakdoguFoods;
    
}

document.querySelector("#uzakdoğu").addEventListener("click",listUzakdogu);

document.querySelector("#all").addEventListener("click",listAllFoods);