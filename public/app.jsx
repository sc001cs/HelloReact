let ReactMsg = React.createClass({

    getDefaultProps: function () {
        console.log('[ReactMsg]: getDefaultProps');

        return {
            name: 'Beni'
        }
    },
    getInitialState: function () {
        console.log('[HelloReact]: getInitialState');

        return {};
    },

    render: function () {
        console.log('[ReactMsg]: render');

        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>{this.props.msg}</p>
            </div>
        );
    }
});

let ReactForm = React.createClass({

    render: function () {
        console.log('[ReactForm]: render');

        return (
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set the name</button>
            </form>
        );
    },
    onButtonClick: function (e) {
        console.log('[ReactForm]: onButtonClick');

        e.preventDefault();

        let nameRef = this.refs.name;
        let name = nameRef.value;

        if (typeof name === 'string' && name.length > 0) {

            nameRef.value = '';
            this.props.onNewName(name);
        }


    }
});

let ReactFormMsg = React.createClass({

    render: function () {
        console.log('[ReactFormMsg]: render');

        return (
            <form onSubmit={this.onClickMsg}>
                <input type="text" ref="msg"/>
                <button>Set the description</button>
            </form>
        );
    },
    onClickMsg: function (e) {
        e.preventDefault();

        let msgComp = this.refs.msg;
        let msg = msgComp.value;
        msgComp.value = '';

        this.props.onNewMsg(msg);
    }
});

let HelloReact = React.createClass({

    getDefaultProps: function () {
        console.log('[HelloReact]: getDefaultProps');

        return {}
    },
    getInitialState: function () {
        console.log('[HelloReact]: getInitialState');

        return {
            name: 'Trew',
            msg: 'Here is some text'
        };
    },
    render: function () {
        console.log('[HelloReact]: render');

        let name = this.state.name;
        let msg = this.state.msg;

        return (
            <div>

                <ReactMsg name={name} msg={msg} />

                <ReactForm onNewName={this.handleNewName} />

                <ReactFormMsg onNewMsg={this.onNewMsg} />

            </div>
        );
    },
    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },
    onNewMsg: function (msg) {
        this.setState({
            msg: msg
        });
    }

});

let firstName = 'Trew';
let msgUser = 'This is from User';

ReactDOM.render(
    <HelloReact name={firstName} msg={msgUser}/>,
    document.getElementById('app')
);