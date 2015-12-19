/**
 * [require description]
 * @param  {[type]} 'react' [description]
 * @return {[type]}         [description]
 */
var React = require('react');
var ReactDOM = require('react-dom');

var JText = React.createClass({

	componentDidMount : function(){
		console.log( 'JText mount');
	},

	componentWillReceiveProps : function(newProps){
		console.log( 'JText componentWillReceiveProps', newProps);
	},

	componentDidUpdate : function(){
		console.log( 'JText componentDidUpdate');
	},

	componentWillUnmount : function(){
		console.log('JText componentWillUnmount');
	},

	render : function(){
		console.log('JText render');

		return (
				<div>这里是JText: { this.props.text }</div>
			);
	}

});

/**
 * [createClass description]
 * @param  {[type]} [description]
 * @return {[type]} [description]
 */
var Quote = React.createClass({

	getDefaultProps : function(){
		console.log( 'Quote getDefaultProps');
		return {
			text : '默认的文字'
		};
	},

	getInitialState : function(){
		console.log( 'Quote getInitialState');
		return {};
	},

	componentDidMount : function(){
		console.log( 'Quote mount');
	},

	componentWillReceiveProps : function(newProps){
		console.log( 'Quote componentWillReceiveProps', newProps);
	},

	componentDidUpdate : function(){
		console.log( 'Quote componentDidUpdate');
	},

	componentWillUnmount : function(){
		console.log('Quote componentWillUnmount');
	},

	render : function(){
		console.log('Quote render');
		var style = {
			color : 'red',
			fontSize : '20px'
		};
		return (
				<blockquote style={style}>
					<h2>在Quote 内部：</h2>
					<JText text={ this.props.text } />
				</blockquote>
			);
	}
});


var App = React.createClass({

	quoteIndex : 1,
	dialogTitleIndex : 0,

	getInitialState : function(){
		return {
			showTip : false,
			showContentInDialog : false,
			quote : {
				text : 'quote默认文字'
			},
			dialog : {
				info : 'info-test----',
				showing : false,
				title : '标题-' + this.dialogTitleIndex
			}
		};
	},

	handleBtn1Click : function(){
		this.setState({
			dialog : {
				showing : true
			}
		});
	},

	increaseDialogTitle : function(){
		this.dialogTitleIndex++;
		this.setState({
			dialog : {
				title : '标题-' + this.dialogTitleIndex
			}
		});
	},

	increaseQuote : function(){
		this.quoteIndex++;
		this.setState({
			quote : {
				text : 'quote-text-' + this.quoteIndex
			}
		});
	},

	componentDidMount : function(){
		console.log( 'App mount ' );

	},

	componentDidUpdate : function(){
		console.log( 'App componentDidUpdate');
	},

	componentWillUnmount : function(){
		console.log('App componentWillUnmount');
	},

	toggleTip : function(){
		this.setState({
			showTip : ! this.state.showTip
		});
	},

	toggleContentInDialog : function(){
		this.setState({
			showContentInDialog : ! this.state.showContentInDialog
		});
	},

	onInputFocus : function(e){
		var target = e.currentTarget;
		var value = target.value;
		var xxx = 1;
	},

	onInputBlur : function(e){
		var target = e.currentTarget;
		var value = target.value;
		var xxx = 1;
		alert('blur: ' + value );
	},

	render : function(){

		console.log( 'App render', this.state );

		var tip = this.state.showTip ? <div className="tip" style={ {color:'green'} }>这里是tip</div> : null;

		var contentInDialog = this.state.showContentInDialog ? <div className="tip" style={ {color:'blue'} }>对话框内的内容</div> : null;

		return (
				<div>
					<h1>hello, react</h1>
					<Quote {...this.state.quote} />
					<button onClick={this.handleBtn1Click}>显示dialog</button>
					<div>11111111111111</div>
					{tip}
					<div id="test-1">
						<RDialog {...this.state.dialog}>
							<div id="aa">这里是对话框的内容</div>
							<div>
								<input onFocus={this.onInputFocus} onBlur={this.onInputBlur} type="text" />
							</div>
							<div>
								<button onClick={this.increaseDialogTitle}>增加dialog标题</button>
								<button onClick={this.increaseQuote}>增加引用区域index</button>
								<button onClick={this.toggleTip}>toggle tip</button>
								<button onClick={this.toggleContentInDialog}>toggle content in dialog</button>
							</div>
							{contentInDialog}
						</RDialog>
					</div>
					<div>2222222222222222222</div>
					<div id="test-2"></div>
				</div>
			);
	}

});

/**
 * [exports description]
 * @type {Object}
 */
module.exports = {
	init : function(){
		ReactDOM.render(
			<App />,
			document.getElementById('app')
		);
	}
};
