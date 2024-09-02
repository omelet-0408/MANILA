function encodeHTMLtoURL(html) {
    html = html.replace(/<!DOCTYPE[^>]*>/i, '');

    html = html.replace(/"/g, "'");

    return encodeURIComponent(html);
  }
  
  // HTML ของคุณจะถูกใส่ที่นี่
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Weapon Detection System</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --accent-color: #e74c3c;
            --background-color: #ecf0f1;
            --text-color: #34495e;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            transition: all 0.3s ease;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
        }
        .section {
            flex: 1;
            min-width: 300px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: all 0.3s ease;
        }
        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        h1, h2 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
        }
        .video-container {
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 100%;
            height: 0;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            position: relative;
        }
        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        table, .chart-container, #systemStatus, #edgeComputingStatus, 
        #facialRecognitionResult, #behaviorAnalysisResult, #audioDetectionResult, #objectTrackingResult {
            margin-top: 20px;
        }
        button {
            background-color: var(--secondary-color);
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 10px;
        }
        button:hover {
            background-color: #27ae60;
        }
    </style>
</head>
<body>
    <h1>Intelligent CCTV System for a Safer Manila</h1>
    
    <div class="container">
        <div class="section">
            <h2>Video Detection</h2>
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="C:\Users\Lenovo\OneDrive\Documents\AYSEAS Project\mp4\Visual Weapon Detection using Deep Learning.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        <div class="section">
            <h2>Detection Results</h2>
            <table id="resultsTable">
                <tr>
                    <th>Timestamp</th>
                    <th>Type</th>
                    <th>Confidence</th>
                </tr>
            </table>
        </div>
    </div>

    <div class="container">
        <div class="section">
            <h2>Facial Recognition</h2>
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="C:\Users\Lenovo\OneDrive\Documents\AYSEAS Project\mp4\CCTV AI Facial Recognition Camera Zoom in Recognizes Person  Elevated Security Camera Surveillance F.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <button onclick="simulateFacialRecognition()">Simulate Facial Recognition</button>
            <div id="facialRecognitionResult"></div>
        </div>

        <div class="section">
            <h2>Behavior Analysis</h2>
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="C:\Users\Lenovo\OneDrive\Documents\AYSEAS Project\mp4\Video analytics module - fight and weapon detection..mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <button onclick="simulateBehaviorAnalysis()">Simulate Behavior Analysis</button>
            <div id="behaviorAnalysisResult"></div>
        </div>
    </div>

    <div class="container">
        <div class="section">
            <h2>Audio Detection</h2>
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="C:\Users\Lenovo\OneDrive\Documents\AYSEAS Project\mp4\Sound Source Detection demo with 4x4 Microphine Array.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <button onclick="simulateAudioDetection()">Simulate Audio Detection</button>
            <div id="audioDetectionResult"></div>
        </div>
        <div class="section">
            <h2>Object Tracking</h2>
            <div class="video-container">
                <video autoplay loop muted>
                    <source src="C:\Users\Lenovo\OneDrive\Documents\AYSEAS Project\mp4\Test 4. DeepSort multi-camera tracking.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <button onclick="simulateObjectTracking()">Simulate Object Tracking</button>
            <div id="objectTrackingResult"></div>
        </div>
    </div>

    <div class="container">
        <div class="section">
            <h2>Crime Statistics</h2>
            <div class="chart-container">
                <canvas id="crimeChart"></canvas>
            </div>
        </div>

        <div class="section">
            <h2>System Status</h2>
            <div id="edgeComputingStatus">Edge computing is active and processing data locally.</div>
            <div id="systemStatus"></div>
            <button onclick="simulateSystemUpdate()">Check for Updates</button>
        </div>
    </div>

    <script>
        function simulateDetection() {
            const detections = [
                { timestamp: '00:05', type: 'Pistol', confidence: 0.85 },
                { timestamp: '00:15', type: 'Rifle', confidence: 0.92 },
                { timestamp: '00:30', type: 'Knife', confidence: 0.78 },
                { timestamp: '00:45', type: 'Suspicious Behavior', confidence: 0.88 }
            ];

            const resultsTable = document.getElementById('resultsTable');
            detections.forEach(detection => {
                const row = resultsTable.insertRow(-1);
                row.insertCell(0).textContent = detection.timestamp;
                row.insertCell(1).textContent = detection.type;
                row.insertCell(2).textContent = detection.confidence.toFixed(2);
            });
        }

        function simulateFacialRecognition() {
            const result = document.getElementById('facialRecognitionResult');
            result.innerHTML = 'Facial recognition completed. 2 matches found in the criminal database.';
        }

        function simulateBehaviorAnalysis() {
            const result = document.getElementById('behaviorAnalysisResult');
            result.innerHTML = 'Behavior analysis detected: Suspicious gathering at 00:20, Potential theft at 00:35';
        }

        function simulateAudioDetection() {
            const result = document.getElementById('audioDetectionResult');
            result.innerHTML = 'Audio detection results: Gunshot detected at 00:10, Scream detected at 00:40';
        }

        function simulateObjectTracking() {
            const result = document.getElementById('objectTrackingResult');
            result.innerHTML = 'Object tracking: Suspicious bag left unattended at 00:25, Tracked for 15 minutes';
        }

        function simulateSystemUpdate() {
            const status = document.getElementById('systemStatus');
            status.innerHTML = 'Checking for updates... Update found. Installing... System is up to date.';
        }

        // Initialize crime statistics chart
        const crimeChart = new Chart(document.getElementById('crimeChart'), {
            type: 'bar',
            data: {
                labels: ['Weapon Detection', 'Suspicious Behavior', 'Theft', 'Altercation'],
                datasets: [{
                    label: 'Incidents in the Last 30 Days',
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.6)',
                        'rgba(46, 204, 113, 0.6)',
                        'rgba(231, 76, 60, 0.6)',
                        'rgba(241, 196, 15, 0.6)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(241, 196, 15, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Simulate initial detection
        simulateDetection();
    </script>
</body>
</html>`;
  
  // เรียกใช้ฟังก์ชันเพื่อแปลง HTML เป็น URL-encoded string
  const encodedHTML = encodeHTMLtoURL(htmlContent);
  const baseURL = "https://your-actual-website.com";  // เปลี่ยนเป็น URL จริงของคุณ
  const pagePath = "/your-specific-page";  // เปลี่ยนเป็นเส้นทางหน้าเว็บที่คุณต้องการ
  const paramName = "htmlContent";  // เปลี่ยนชื่อพารามิเตอร์ตามที่คุณต้องการ
  
  // สร้าง URL ที่สมบูรณ์
  const fullURL = `${baseURL}${pagePath}?${paramName}=${encodedHTML}`;
  console.log(fullURL);
  fetch(fullURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));