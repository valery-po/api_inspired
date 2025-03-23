import './index.html';
import './index.scss';

import { router } from './modules/utils/router';
import { mainPageController } from './modules/controllers/mainPageController';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { getData } from './modules/getData';
import { API_URL, DATA, main } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/utils/createElement';
import { categoryPageController } from './modules/controllers/categoryPageController';
import { searchPageController } from './modules/controllers/searchController';
import { favouriteController } from './modules/controllers/favouriteController';
import { cardPageController } from './modules/controllers/cardPageController';
import { cartController } from './modules/controllers/cartController';




const init = async () => {

    try {
        router.on('*', () => {
            renderHeader();
            renderFooter();
        });
        DATA.navigation = await getData(`${API_URL}/api/categories`);
        DATA.colors = await getData(`${API_URL}/api/colors`);

        createCssColors(DATA.colors);


        router.on('/', () => {
            mainPageController();
        });

        router.on('women', () => {
            mainPageController('women')
        });

        router.on('men', () => {
            mainPageController('men');
        });

        router.on('/:gender/:category', categoryPageController);
        router.on('/product/:id', cardPageController);
        router.on('cart',   cartController);
        router.on('search', searchPageController);
        router.on('favorite', favouriteController);

    } catch (err) {
        console.warn(e);
        createElement(
            'h2',
            {
                textContent: 'Something go wrong, Please try later!'
            },
            {
                parent: main,
                cb(h2) {
                    h2.style.textAlign = 'center'
                }
            }

        )

    } finally {
        router.resolve();
    }

}
init();
