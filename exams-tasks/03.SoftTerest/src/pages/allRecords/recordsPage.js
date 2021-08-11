import allRecords from './recordsTemplate.js';

let viewModel = undefined;
let currRouter = undefined;
let currRender = undefined;
let subjectService = undefined;

const init = (router, render, service1) => {
    currRouter = router;
    currRender = render;
    subjectService = service1;
    viewModel = {};
};

const getView = async () => {
    try {
        viewModel['data'] = await subjectService.getAllRecords();
        viewModel.countRecords = Object.keys(viewModel.data).length;

    } catch ( err ) {
        viewModel.countRecords = 0;
        console.log('No records, in database');
    } finally {

        let currTemplate = allRecords.allRecords(viewModel);
        currRender(currTemplate);
    }

    //console.log(document.querySelector('div.card').textContent)
};

export default {
    init,
    getView
};
