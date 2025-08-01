// Data Management System for Silent Voice
class DataManager {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    // Initialize localStorage if empty
    if (!localStorage.getItem('silentVoiceUsers')) {
      const defaultUsers = [
        {
          email: 'oripovdzhakhongir@gmail.com',
          password: 'jaha2010!',
          isAdmin: true,
          name: 'Admin',
          id: 1
        },
        {
          email: 'pochomulloevasumaiiakhon@gmail.com',
          password: 'Rumon2010',
          isAdmin: true,
          name: 'Moderator',
          id: 2
        }
      ];
      localStorage.setItem('silentVoiceUsers', JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem('silentVoicePosts')) {
      const defaultPosts = [
        {
          id: 1,
          content: "I feel overwhelmed by everything lately. I just needed to say it somewhere.",
          author: "Anonymous",
          authorId: null,
          time: "2 hours ago",
          likes: 5,
          approved: true,
          comments: [
            {
              id: 1,
              content: "You're not alone. Take it one step at a time. Sending you strength! 💜",
              author: "Support",
              authorId: null,
              time: "1 hour ago",
              approved: true
            }
          ]
        },
        {
          id: 2,
          content: "It's hard to talk to my family about how I feel. I wish they understood.",
          author: "Anonymous",
          authorId: null,
          time: "4 hours ago",
          likes: 3,
          approved: true,
          comments: [
            {
              id: 2,
              content: "Sometimes it's easier to write than to speak. We hear you. 💜",
              author: "Support",
              authorId: null,
              time: "3 hours ago",
              approved: true
            }
          ]
        }
      ];
      localStorage.setItem('silentVoicePosts', JSON.stringify(defaultPosts));
    }
  }

  // User Management
  getUsers() {
    return JSON.parse(localStorage.getItem('silentVoiceUsers') || '[]');
  }

  saveUsers(users) {
    localStorage.setItem('silentVoiceUsers', JSON.stringify(users));
  }

  addUser(user) {
    const users = this.getUsers();
    user.id = Date.now();
    users.push(user);
    this.saveUsers(users);
    return user;
  }

  deleteUser(userId) {
    const users = this.getUsers();
    const filteredUsers = users.filter(u => u.id !== userId);
    this.saveUsers(filteredUsers);
  }

  findUser(email, password) {
    const users = this.getUsers();
    return users.find(u => u.email === email && u.password === password);
  }

  // Post Management
  getPosts() {
    return JSON.parse(localStorage.getItem('silentVoicePosts') || '[]');
  }

  savePosts(posts) {
    localStorage.setItem('silentVoicePosts', JSON.stringify(posts));
  }

  addPost(post) {
    const posts = this.getPosts();
    post.id = Date.now();
    post.time = this.getTimeAgo(new Date());
    posts.unshift(post);
    this.savePosts(posts);
    return post;
  }

  updatePost(postId, updates) {
    const posts = this.getPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      posts[postIndex] = { ...posts[postIndex], ...updates };
      this.savePosts(posts);
      return posts[postIndex];
    }
    return null;
  }

  deletePost(postId) {
    const posts = this.getPosts();
    const filteredPosts = posts.filter(p => p.id !== postId);
    this.savePosts(filteredPosts);
  }

  // Comment Management
  addComment(postId, comment) {
    const posts = this.getPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      comment.id = Date.now();
      comment.time = this.getTimeAgo(new Date());
      if (!posts[postIndex].comments) {
        posts[postIndex].comments = [];
      }
      posts[postIndex].comments.push(comment);
      this.savePosts(posts);
      return comment;
    }
    return null;
  }

  updateComment(postId, commentId, updates) {
    const posts = this.getPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      const commentIndex = posts[postIndex].comments.findIndex(c => c.id === commentId);
      if (commentIndex !== -1) {
        posts[postIndex].comments[commentIndex] = { 
          ...posts[postIndex].comments[commentIndex], 
          ...updates 
        };
        this.savePosts(posts);
        return posts[postIndex].comments[commentIndex];
      }
    }
    return null;
  }

  deleteComment(postId, commentId) {
    const posts = this.getPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      posts[postIndex].comments = posts[postIndex].comments.filter(c => c.id !== commentId);
      this.savePosts(posts);
    }
  }

  // Utility Functions
  getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  }

  // Statistics
  getStats() {
    const posts = this.getPosts();
    const users = this.getUsers();
    
    return {
      totalPosts: posts.length,
      totalComments: posts.reduce((sum, p) => sum + (p.comments ? p.comments.length : 0), 0),
      totalUsers: users.length,
      pendingPosts: posts.filter(p => !p.approved).length,
      pendingComments: posts.reduce((sum, p) => {
        return sum + (p.comments ? p.comments.filter(c => !c.approved).length : 0);
      }, 0)
    };
  }

  // Export/Import for backup
  exportData() {
    return {
      users: this.getUsers(),
      posts: this.getPosts(),
      exportDate: new Date().toISOString()
    };
  }

  importData(data) {
    if (data.users) {
      localStorage.setItem('silentVoiceUsers', JSON.stringify(data.users));
    }
    if (data.posts) {
      localStorage.setItem('silentVoicePosts', JSON.stringify(data.posts));
    }
  }
}

// Global data manager instance
window.dataManager = new DataManager(); 