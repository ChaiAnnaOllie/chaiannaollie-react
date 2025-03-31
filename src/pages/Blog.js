
import React, { useState } from 'react';

const Blog = () => {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [activePost, setActivePost] = useState(null);

  const blogPosts = [
    { id: 1, title: 'Welcome to Our Blog', content: 'This is the first post on the ChaiAnnaOllie blog!' },
    { id: 2, title: 'Training Tips', content: 'Helpful tips for training your dog with positive reinforcement.' }
  ];

  const handleCommentSubmit = (postId) => {
    if (newComment.trim() === '') return;
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment]
    }));
    setNewComment('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog</h1>
      {activePost ? (
        <div>
          <button onClick={() => setActivePost(null)}>Back to Posts</button>
          <h2>{activePost.title}</h2>
          <p>{activePost.content}</p>

          <div>
            <h3>Comments</h3>
            <ul>
              {(comments[activePost.id] || []).map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <textarea
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              style={{ width: '100%', marginTop: '10px' }}
            />
            <button onClick={() => handleCommentSubmit(activePost.id)}>Submit</button>
          </div>
        </div>
      ) : (
        blogPosts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <button onClick={() => setActivePost(post)}>Read More</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
