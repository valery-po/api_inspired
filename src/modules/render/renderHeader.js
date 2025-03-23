import { createElement } from "../utils/createElement";
import logo from '../../img/logo.svg'
import { search, searchToggle } from "./renderSearch";
import { header } from "../const";


export const searchButton = createElement('button', {
  className: 'header__link',
  innerHTML: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.4431 16.4438L20.9994 21.0002"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  
   `
}, {
  cb(btn) {
   btn.addEventListener("click", searchToggle);
  }
});



export const cartLink = createElement('a', {
  className: 'header__link',
  innerHTML: `
      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5787 1.75H3.42122C3.23665 1.75 3.05856 1.81806 2.92103 1.94115C2.7835 2.06425 2.69619 2.23373 2.67581 2.41718L1.34248 14.4172C1.33083 14.522 1.34143 14.6281 1.37357 14.7286C1.40572 14.829 1.4587 14.9216 1.52904 15.0002C1.59939 15.0788 1.68553 15.1417 1.78182 15.1847C1.87812 15.2278 1.98241 15.25 2.08789 15.25H19.912C20.0175 15.25 20.1218 15.2278 20.2181 15.1847C20.3144 15.1417 20.4005 15.0788 20.4708 15.0002C20.5412 14.9216 20.5942 14.829 20.6263 14.7286C20.6585 14.6281 20.6691 14.522 20.6574 14.4172L19.3241 2.41718C19.3037 2.23373 19.2164 2.06425 19.0789 1.94115C18.9413 1.81806 18.7632 1.75 18.5787 1.75Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  
   `,
  href: '#cart'
});




export const favoriteLink = createElement('a', {
  className: 'header__link',
  innerHTML: `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

  
   `,
  href: '#favorite'
});


const container = createElement('div', {
  className: 'container header__container',
  innerHTML: `
      <a href="tel:87473787200" class="header__phone header__nav-link">+7 747 378 72 00</a>
   
  `
});


const logoLink = createElement('a',

  {
    className: 'header__logo',
    href: '/#',
    innerHTML: `<img  src="${logo}" alt="logo Inspired"></img>`
  },

  {
    parent: container
  }


)


const nav = createElement('div', {
  className: 'header__navigation'
}, {
  parent: container,
})

createElement('ul', {
  className: 'header__nav-list'
}, {
  parent: nav,
  appends: [createElement('li', {
    className: 'header__nav-item'
  }, {
    append: searchButton,
  }),
  createElement('li', {
    className: 'header__nav-item'
  }, {
    append: cartLink,
  }),

  createElement('li', {
    className: 'header__nav-item'
  }, {
    append: favoriteLink,
  }),
  ],
})


export const renderHeader = () => {

  header.append(container);
  header.after(search);

}