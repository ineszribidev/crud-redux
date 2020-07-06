import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({//access dispatch in our components sachant que grace à this.prop.dispatch on a envoyé l'action en passant l'objet data avec un type de «ADD_POST».
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
//pour envoyer une action faut utiliser la fonction connect
//pour transmettre une action au reducer on a besoin de dispatch pr ts ca faut avoir accés au dispatch grace à la methode connect
//connect () renvoie une fonction qui prend le composant actuel en argument et renvoie un nouveau composant avec la méthode de répartition comme il est son props.
// connect retournera finalement un nouveau composant qui a la méthode de répartition comme accessoire. La syntaxe de base pour écrire connect est:export default connect()(component-name)
export default connect()(PostForm);