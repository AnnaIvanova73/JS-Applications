import { html} from '../../../node_modules/lit-html/lit-html.js'

const edit = (viewModel) => {
    return html `
        <div class="container">
            <form action="#" method="" @submit=${(e)=> {
                viewModel.createRecord(e,viewModel.idRecord)
            }}>
                <fieldset>
                    <legend>Edit article</legend>
                    <p class="field title">
                        <input type="text" name="title" id="title" placeholder="Arrays" .value=${viewModel.title}>
                        <label for="title">Title:</label>
                    </p>

                    <p class="field category">
                        <input type="text" name="category" id="category" placeholder="JavaScript" .value=${viewModel.category}>
                        <label for="category">Category:</label>
                    </p>
                    <p class="field content">
                        <textarea name="content" id="content" .value=${viewModel.content}></textarea>
                        <label for="content">Content:</label>
                    </p>

                    <p class="field submit">
                        <button class="btn submit" type="submit">Edit</button>
                    </p>

                </fieldset>
            </form>
        </div>
    `;
};

export default{
    edit
}