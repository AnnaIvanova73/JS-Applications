import catalogTemplate from "../templates/catalogTemplate.js";
import furnitureService from "../services/furnitureService.js";
import nav from "../pages/nav.js";


const requestFurnitures = async () => {
    return await furnitureService.getAllFurnitures();
};


const getView = async () => {
    let data = await requestFurnitures();
    catalogTemplate.render(catalogTemplate.renderCatalogTemplate(data), document.querySelector('#root'));
};

export default async function (context) {
    nav.addActiveClass('catalogLink');
    await getView();
}