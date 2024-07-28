import PropTypes from 'prop-types';

const Post = () => {
    return (
        <div >
            <img src={f} alt="" />
            <div className="flex">
                <img src="" alt="" />
                <div className="">
                    <h3>Mr. Raju</h3>
                    <p>Mar 14</p>
                </div>
                <p>20 min read</p>
            </div>
            <h2>How to get your first job as a self-taught programmer.</h2>
            <p>#programming #coding</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Post;