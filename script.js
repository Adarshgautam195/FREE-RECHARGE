function showOperatorSelection() {
    document.getElementById('phoneForm').style.display = 'none';
    document.getElementById('operatorSelection').style.display = 'block';
}

function showTargetLine() {
    document.getElementById('operatorSelection').style.display = 'none';
    document.getElementById('targetLine').style.display = 'block';
}

function shareOnWhatsApp() {
    let targetStatus = document.getElementById('targetStatus');
    let completed = parseInt(targetStatus.innerText);
    completed += 50;
    targetStatus.innerText = completed + '%';

    if (completed >= 100) {
        document.getElementById('congratulationsMessage').style.display = 'block';
    }
}
