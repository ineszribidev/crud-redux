const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data])//Si la valeur est ‘ADD_POST’, nous renvoyons un nouveau tableau contenant action.data.
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)//map pour parcourir chaque élément, puis vérifier l'ID de la publication avec l'ID qui a été transmis dans l'action alors S'il y a correspondance, renvoyez un nouvel objet mais changez la valeur de Editing en true si elle était fausse ou vice-versa. S'il n'y a pas de correspondance, renvoyez simplement l'objet tel quel.
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}
export default postReducer;//empty array