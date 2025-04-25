document.addEventListener('DOMContentLoaded', function() {
  // Main Tab Switching
  const mainTabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  mainTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      mainTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      document.getElementById(`${this.dataset.tab}-content`).classList.add('active');
    });
  });

  // Level Tab Switching
  const levelTabs = document.querySelectorAll('.level-tab-btn');
  const questionLevels = document.querySelectorAll('.question-level');
  
  levelTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all level tabs
      levelTabs.forEach(t => t.classList.remove('active'));
      questionLevels.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      document.querySelector(`.question-level[data-level="${this.dataset.level}"]`).classList.add('active');
    });
  });

  // Modal Handling
  const modals = {
    solution: document.getElementById('solution-modal'),
    video: document.getElementById('video-modal'),
    workspace: document.getElementById('workspace-modal'),
    report: document.getElementById('report-modal')
  };

  const closeButtons = document.querySelectorAll('.close-btn');
  
  // Open Modals
  document.addEventListener('click', function(e) {
    if (e.target.closest('.solution-btn')) {
      modals.solution.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    
    if (e.target.closest('.video-btn')) {
      modals.video.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    
    if (e.target.closest('.workspace-btn')) {
      modals.workspace.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    
    if (e.target.closest('.report-btn')) {
      modals.report.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });

  // Close Modals
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      Object.values(modals).forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = '';
    });
  });

  // Close when clicking outside modal
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      Object.values(modals).forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = '';
    }
  });
});