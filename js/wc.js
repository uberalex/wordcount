var TextBox = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        function countWords(words){
            if (words.length == 0)
                return 0;
            return words.match(/[^\s]+/g).length;
        };
        return (
            <div className="color ui equal width grid">
                <div className="row">
                <div className="column">
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </div> 
                </div>
                <div className="row">
                <div className="column">
                    <div className="ui segment"><p>Character count: {this.state.value.length}</p></div>
                    </div>
                <div className="column">
                    <div className="ui segment"><p>Word count: {countWords(this.state.value)}</p></div>
                    </div>
                </div>
            </div>
        );
    }

});
ReactDOM.render(
    <TextBox />,
    document.getElementById('content')
);
