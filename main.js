(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Vane/react/thumblist-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/Vane/react/thumblist-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvVmFuZS9yZWFjdC90aHVtYmxpc3QtZ3VscC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksT0FBTyxHQUFHO0lBQ1YsYUFBYSxFQUFFLENBQUM7UUFDWixLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFdBQVcsRUFBRSxpSUFBaUk7UUFDOUksUUFBUSxFQUFFLGtDQUFrQztLQUMvQyxDQUFDO1FBQ0UsS0FBSyxFQUFFLGNBQWM7UUFDckIsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsWUFBWTtRQUNwQixXQUFXLEVBQUUsMklBQTJJO1FBQ3hKLFFBQVEsRUFBRSx5Q0FBeUM7S0FDdEQsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFFRixpQ0FBaUM7QUFDakMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUQsMENBQTBDO0FBQzFDLHdEQUF3RDtBQUN4RCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBvcHRpb25zID0ge1xuICAgIHRodW1ibmFpbERhdGE6IFt7XG4gICAgICAgIHRpdGxlOiAnU2hvdyBDb3Vyc2VzJyxcbiAgICAgICAgbnVtYmVyOiAzMixcbiAgICAgICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JlYWN0IGlzIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5ncyBmYXN0LCBkeW5hbWljIHBhZ2VzLiBSZWFjdCBpcyBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZm9yIG1ha2luZ3MgZmFzdCwgZHluYW1pYyBwYWdlcy4nLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9mb3JtYXRqcy5pby9pbWcvcmVhY3Quc3ZnJ1xuICAgIH0se1xuICAgICAgICB0aXRsZTogJ1Nob3cgQ291cnNlcycsXG4gICAgICAgIG51bWJlcjogMjUsXG4gICAgICAgIGhlYWRlcjogJ0xlYXJuIEd1bHAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0d1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LiBHdWxwIHdpbGwgc3BlZWQgdXAgeW91ciBkZXZlbG9wbWVudCB3b3JrZmxvdy4gR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3cuJyxcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vYnJ1bmNoLmlvL2ltYWdlcy9vdGhlcnMvZ3VscC5wbmcnXG4gICAgfV1cbn07XG5cbi8vIEFzayByZWFjdCB0byByZW5kZXIgdGhpcyBjbGFzc1xudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuLy8gV2hlbiB3ZSBhc2sgcmVhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3MsXG4vLyB3ZSB3aWxsIHRlbGwgaXQgd2hlcmUgdG8gcGxhY2UgdGhlIGVsZW1lbnQgaW4gdGhlIERPTVxuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKSk7Il19
