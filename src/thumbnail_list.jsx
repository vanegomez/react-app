var Thumbnail = require('thumbnail');

var ThumbnailList = React.createClass({
    render: function() {
        var list = this.props.thumbnailData.map(function (thumbnailprops) {
            return <Thumbnail {...thumbnailprops} />
        });

        return <div>
            {list}
        </div>
    }
});