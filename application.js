var options = {
    thumbnailData: [{
        title: 'Show Courses',
        number: 32,
        header: 'Learn React',
        description: 'React is fantastic new library for makings fast, dynamic pages. React is fantastic new library for makings fast, dynamic pages.',
        imageUrl: 'http://formatjs.io/img/react.svg'
    },{
        title: 'Show Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
        imageUrl: 'http://brunch.io/images/others/gulp.png'
    }]
};

// Ask react to render this class
var element = React.createElement(ThumbnailList, options);

// When we ask react to render this class,
// we will tell it where to place the element in the DOM
ReactDOM.render(element, document.querySelector('.target'));
var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
            React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
                React.createElement("div", {className: "caption"}, 
                    React.createElement("h3", null, this.props.header), 
                    React.createElement("p", null, this.props.description), 
                    React.createElement("p", null, 
                        React.createElement(Badge, {title: this.props.title, number: this.props.number})
                    )
                )
            )
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function (thumbnailprops) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailprops))
        });

        return React.createElement("div", null, 
            list
        )
    }
});