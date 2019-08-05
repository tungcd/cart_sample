import * as types from './../constants/actionType';

var initialState = [
    {
        id: 1,
        name: 'iphone',
        img: 'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/1/_/1_3_7.png',
        description: 'sản phẩm do usa sản xuất',
        price: 500,
        inventory: 10,
        rating:4,
    },
    {
        id: 2,
        name: 'samsung',
        img: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863643187455627_ss-galaxy-s10-trang-1.png',
        description: 'sản phẩm do korea sản xuất',
        price: 600,
        inventory: 10,
        rating:2
    },
    {
        id: 3,
        name: 'huawei',
        img:'https://cdn.fptshop.com.vn/Uploads/Originals/2019/3/27/636893060167931420_huawei-p30-xanh-cuc-quang-4.png',
        description: 'sản phẩm do china sản xuất',
        price: 700,
        inventory: 10,
        rating:3
    }
]

var products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;