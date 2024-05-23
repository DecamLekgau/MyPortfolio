function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateTime, 1000);
  
  function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const [alarmHours, alarmMinutes] = alarmTime.split(':');
    const now = new Date();
    const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);
    const timeUntilAlarm = alarm - now;
    
    if (timeUntilAlarm > 0) {
      setTimeout(() => {
        document.getElementById('alarmSound').play();
        alert('Alarm!');
      }, timeUntilAlarm);
    } else {
      alert('Please set the alarm time in the future.');
    }
  }
  