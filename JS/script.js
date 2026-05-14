//Page Navigation
const pageTitles = {
  dashboard: 'Dashboard <span>Overview</span>',
  servers: 'Servers <span>All Instances</span>',
  'minecraft-java': 'Minecraft Java <span>Server Management</span>',
  'minecraft-bedrock': 'Minecraft Bedrock <span>Server Management</span>',
  steam: 'Steam Games <span>Dedicated Servers</span>',
  nodes: 'Nodes <span>Connected Machines</span>',
  network: 'Network <span>Ports & Firewall</span>',
  files: 'File Manager <span>Server Files</span>',
  console: 'Console <span>Live Output</span>',
  users: 'Users <span>Access Control</span>',
  backups: 'Backups <span>Data Protection</span>',
  setup: 'Setup Guide <span>Installation</span>',
  settings: 'Settings <span>Configuration</span>',
};

//Switch between pages
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pg = document.getElementById('page-'+name);
  if(pg) {
  	pg.classList.add('active');
  }
  document.getElementById('page-title').innerHTML = pageTitles[name] || name;

  document.querySelectorAll('.nav-item').forEach(n => {
    if(n.getAttribute('onclick') && n.getAttribute('onclick').includes("'"+name+"'")) {
    	n.classList.add('active');
    }
  });
}