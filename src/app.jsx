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