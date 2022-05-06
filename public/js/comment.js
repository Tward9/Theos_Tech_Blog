const newCommentHandler = async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    
    const commentDescription = document.querySelector('#comment-description').value.trim();
    if (commentDescription) {
        const loc = window.location.href
        console.log(loc);
        const loc_id = loc[loc.length-1];
        console.log(loc_id);
        const blog_post_id = loc_id
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({commentDescription, blog_post_id}),
            headers: {'Content-Type': 'application/json'},
        });
        
        if (response.ok) {
            document.location.replace(`/blogPost/${loc_id}`);
        } else {
            alert('Comment failed to post');
        };
    };
};

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);