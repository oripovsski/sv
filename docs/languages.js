// Complete Language System for Silent Voice
const translations = {
  en: {
    // Main UI
    title: "Silent Voice",
    subtitle: "A safe, anonymous space to share your feelings and support others. Your voice matters — even in silence.",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    admin: "Admin",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    
    // Post System
    shareFeelings: "Share Your Feelings",
    yourMessage: "Your Message (Anonymous)",
    sharePlaceholder: "Share what's on your mind... You can talk about anxiety, sadness, loneliness, stress, relationships, or anything else. This is a safe space.",
    shareAnonymously: "Share Anonymously",
    recentPosts: "Recent Posts",
    refresh: "Refresh",
    loadingPosts: "Loading posts...",
    noPostsYet: "No posts yet. Be the first to share!",
    writeComment: "Write a supportive comment...",
    sendSupport: "Send Support",
    postShared: "Your post has been submitted and is pending approval!",
    commentSubmitted: "Comment submitted and pending approval!",
    
    // Moderation
    moderation: "Moderation: All posts and comments are reviewed by a moderator to ensure a safe, supportive environment. Harmful or abusive content will be removed.",
    pendingPosts: "Pending Posts",
    pendingComments: "Pending Comments",
    approve: "Approve",
    reject: "Reject",
    postApproved: "Post approved!",
    postRejected: "Post rejected and removed!",
    commentApproved: "Comment approved!",
    commentRejected: "Comment rejected and removed!",
    
    // Admin Panel
    adminPanel: "Admin Panel - Moderation",
    userManagement: "User Management",
    statistics: "Statistics",
    totalPosts: "Total Posts",
    totalComments: "Total Comments",
    registeredUsers: "Registered Users",
    pendingPostsCount: "Pending Posts",
    deleteUser: "Delete User",
    makeAdmin: "Make Admin",
    userDeleted: "User deleted successfully!",
    userPromoted: "User promoted to admin!",
    exportData: "Export Data",
    importData: "Import Data",
    dataExported: "Data exported successfully!",
    dataImported: "Data imported successfully!",
    
    // Support Chat
    supportChat: "Support Chat",
    sendMessage: "Send Message",
    typeMessage: "Type your message...",
    chatPlaceholder: "Need help? Ask our support team...",

    adminResponse: "Admin Response",
    
    // User Profile
    profile: "Profile",
    editProfile: "Edit Profile",
    profileName: "Display Name",
    profilePicture: "Profile Picture",
    saveProfile: "Save Profile",
    profileUpdated: "Profile updated successfully!",
    
    // Website Status

    
    // Features
    howItHelps: "How Silent Voice Helps",
    anonymousSharing: "Anonymous Sharing",
    anonymousSharingDesc: "Share your thoughts without revealing your identity",
    supportiveCommunity: "Supportive Community",
    supportiveCommunityDesc: "Receive kind words and support from others",
    safeEnvironment: "Safe Environment",
    safeEnvironmentDesc: "All content is moderated for your safety",
    noJudgment: "No Judgment",
    noJudgmentDesc: "Express yourself freely without fear",
    
    // Stats
    posts: "Posts",
    comments: "Comments",
    supporters: "Supporters",
    
    // Footer
    footer: "This site is for support and community only. If you are in crisis, please seek professional help.",
    madeWith: "Made with love for everyone who needs to be heard.",
    
    // Notifications
    welcome: "Welcome",
    adminAccess: "Admin access granted!",
    invalidCredentials: "Invalid email or password!",
    userExists: "User already exists!",
    accountCreated: "Account created successfully!",
    loggedOut: "Logged out successfully!",
    passwordsMismatch: "Passwords do not match!",
    adminRequired: "Admin access required!",
    copiedToClipboard: "Copied to clipboard!",
    confirmDelete: "Are you sure you want to delete this? This action cannot be undone.",
    errorImporting: "Error importing data!"
  },
  
  ru: {
    // Main UI
    title: "Тихий Голос",
    subtitle: "Безопасное анонимное пространство для выражения чувств и поддержки других. Ваш голос важен — даже в тишине.",
    login: "Войти",
    signup: "Регистрация",
    logout: "Выйти",
    admin: "Админ",
    email: "Email",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    
    // Post System
    shareFeelings: "Поделитесь своими чувствами",
    yourMessage: "Ваше сообщение (Анонимно)",
    sharePlaceholder: "Поделитесь тем, что у вас на душе... Вы можете говорить о тревоге, грусти, одиночестве, стрессе, отношениях или о чем-либо другом. Это безопасное пространство.",
    shareAnonymously: "Поделиться анонимно",
    recentPosts: "Недавние посты",
    refresh: "Обновить",
    loadingPosts: "Загрузка постов...",
    noPostsYet: "Пока нет постов. Будьте первым, кто поделится!",
    writeComment: "Напишите поддерживающий комментарий...",
    sendSupport: "Отправить поддержку",
    postShared: "Ваш пост был отправлен и ожидает одобрения!",
    commentSubmitted: "Комментарий отправлен и ожидает одобрения!",
    
    // Moderation
    moderation: "Модерация: Все посты и комментарии проверяются модератором для обеспечения безопасной и поддерживающей среды. Вредоносный или оскорбительный контент будет удален.",
    pendingPosts: "Ожидающие посты",
    pendingComments: "Ожидающие комментарии",
    approve: "Одобрить",
    reject: "Отклонить",
    postApproved: "Пост одобрен!",
    postRejected: "Пост отклонен и удален!",
    commentApproved: "Комментарий одобрен!",
    commentRejected: "Комментарий отклонен и удален!",
    
    // Admin Panel
    adminPanel: "Панель администратора - Модерация",
    userManagement: "Управление пользователями",
    statistics: "Статистика",
    totalPosts: "Всего постов",
    totalComments: "Всего комментариев",
    registeredUsers: "Зарегистрированных пользователей",
    pendingPostsCount: "Ожидающие посты",
    deleteUser: "Удалить пользователя",
    makeAdmin: "Сделать администратором",
    userDeleted: "Пользователь успешно удален!",
    userPromoted: "Пользователь повышен до администратора!",
    exportData: "Экспорт данных",
    importData: "Импорт данных",
    dataExported: "Данные успешно экспортированы!",
    dataImported: "Данные успешно импортированы!",
    
    // Support Chat
    supportChat: "Чат поддержки",
    sendMessage: "Отправить сообщение",
    typeMessage: "Введите ваше сообщение...",
    chatPlaceholder: "Нужна помощь? Спросите нашу службу поддержки...",
    chatClosed: "Чат временно закрыт на техническое обслуживание.",
    adminResponse: "Ответ администратора",
    
    // User Profile
    profile: "Профиль",
    editProfile: "Редактировать профиль",
    profileName: "Отображаемое имя",
    profilePicture: "Фото профиля",
    saveProfile: "Сохранить профиль",
    profileUpdated: "Профиль успешно обновлен!",
    
    // Website Status

    
    // Features
    howItHelps: "Как помогает Тихий Голос",
    anonymousSharing: "Анонимное общение",
    anonymousSharingDesc: "Делитесь мыслями, не раскрывая свою личность",
    supportiveCommunity: "Поддерживающее сообщество",
    supportiveCommunityDesc: "Получайте добрые слова и поддержку от других",
    safeEnvironment: "Безопасная среда",
    safeEnvironmentDesc: "Весь контент модерируется для вашей безопасности",
    noJudgment: "Без осуждения",
    noJudgmentDesc: "Выражайтесь свободно без страха",
    
    // Stats
    posts: "Посты",
    comments: "Комментарии",
    supporters: "Поддерживающие",
    
    // Footer
    footer: "Этот сайт предназначен только для поддержки и сообщества. Если вы в кризисе, пожалуйста, обратитесь за профессиональной помощью.",
    madeWith: "Создано с любовью для всех, кто нуждается в том, чтобы быть услышанным.",
    
    // Notifications
    welcome: "Добро пожаловать",
    adminAccess: "Доступ администратора предоставлен!",
    invalidCredentials: "Неверный email или пароль!",
    userExists: "Пользователь уже существует!",
    accountCreated: "Аккаунт успешно создан!",
    loggedOut: "Успешно вышли из системы!",
    passwordsMismatch: "Пароли не совпадают!",
    adminRequired: "Требуется доступ администратора!",
    copiedToClipboard: "Скопировано в буфер обмена!",
    confirmDelete: "Вы уверены, что хотите удалить это? Это действие нельзя отменить.",
    errorImporting: "Ошибка импорта данных!"
  }
};

// Language switching function
function changeLanguage(lang) {
  window.currentLanguage = lang;
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  const postContent = document.getElementById('postContent');
  if (postContent) {
    postContent.placeholder = translations[lang].sharePlaceholder;
  }
  
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.placeholder = translations[lang].chatPlaceholder;
  }
  
  // Update form labels
  const formLabels = document.querySelectorAll('.form-label');
  formLabels.forEach(label => {
    const key = label.getAttribute('data-translate');
    if (key && translations[lang][key]) {
      label.textContent = translations[lang][key];
    }
  });
  
  // Update buttons
  const buttons = document.querySelectorAll('[data-translate-btn]');
  buttons.forEach(btn => {
    const key = btn.getAttribute('data-translate-btn');
    if (translations[lang][key]) {
      btn.textContent = translations[lang][key];
    }
  });
  
  // Update admin panel if open
  if (document.getElementById('adminModal').style.display === 'block') {
    showAdminTab(window.currentAdminTab || 'pending');
  }
  
  // Update support chat if open
  if (document.getElementById('chatModal').style.display === 'block') {
    updateChatDisplay();
  }
  
  // Redisplay posts with new language
  if (typeof displayPosts === 'function') {
    displayPosts();
  }
}

// Export for use in main file
window.translations = translations;
window.changeLanguage = changeLanguage; 