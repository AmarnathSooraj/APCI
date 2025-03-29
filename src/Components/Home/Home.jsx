import React from 'react';
import './Home.css';
import collegeImage from '../../assets/clg.jpg';
import PaperSubmission from '../PaperSubmission/PaperSubmission';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <img className="hero-image" src={collegeImage} alt="College Campus" />
      
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-heading">ABOUT <span>InRACs</span></h2>
          <div className="about-text">
            <p>
              InRACs -2025 is an International Conference on Recent Advancements in Computing and 
              System Design (InRACS-2025) organised by the Department of Electronics and Communication 
              Engineering, Vadakara, Kozhikode, Kerala, India. The conference is intended for technical 
              exchange amongst researchers in various emerging fields of Signal Processing, Artificial 
              Intelligence, Machine Learning, Big Data Analytics, Communication, Robotics, Automation and 
              Control, VLSI and Embedded System, spanning across five tracks. The technical program 
              includes keynote lectures, technical sessions, and special sessions by alumni of our Institution.
            </p>
            <p>
              The Department of Electronics and Communication Engineering was established in 1999. The primary 
              objective of the department has been to impart quality education and training at the 
              undergraduate level in various areas of Electronics and Communication Engineering. The 
              department has been consistently producing engineering graduates of high caliber who occupy 
              prestigious positions in the academic and industrial fields.
            </p>
            <p>
              The College of Engineering, Vadakara is the first College established by the Co-operative 
              Academy of Professional Education, which started functioning in June 1999. The College is 
              located at Vadakara, a region lying in the northern part of Kozhikode district. It is 
              located on a 26-acre campus at Kakkoramala in Kurunthodi, in the Maniyoor panchayat of 
              Vadakara.
            </p>
          </div>
        </div>
        
        <div className="important-links">
          <div className="links-section">
            <h2 className="section-heading">IMPORTANT <span>LINKS</span></h2>
            <div className="buttons">
              <Link to='https://easychair.org/conferences/?conf=inracs25'><button>Submit your paper</button></Link>
              <Link to='/papersubmission' element={<PaperSubmission/>}><button>Paper Submission Guidelines</button></Link>
              <Link to='https://easychair.org/conferences/?conf=inracs25'><button>Call for Paper</button></Link>
            </div>
          </div>
          
          <div className="dates-section">
            <h2 className="section-heading">IMPORTANT <span>DATES</span></h2>
            <ul className="dates-list">
              <li>Last date for paper submission: <a href="#">15th April 2025</a></li>
              <li>Acceptance notification: <a href="#">15th May 2025</a></li>
              <li>Last date for camera-ready copy submission: <a href="#">30th May 2025</a></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="scope-section">
        <h2 className="section-heading">SCOPE <span>OF THE InRACs</span></h2>
        <p>The conference will be conducted in six parallel tracks. Topics of interest in each track include, but are not limited to, the following:</p>
        <ul className="scope-list">
          <li>
            <span className="track-title">Track 1: Artificial Intelligence and Machine Learning</span><br/>
            Foundations of AI & ML, Reinforcement Learning and Deep Reinforcement Learning, Deep Learning & Neural Networks, Generative AI, Multimodal AI, Neuromorphic Computing, AI for Signal Processing & Communication, AI-based Image, Speech, and Video Processing, AI for Biomedical Signal Analysis, AI in VLSI and Automation, AI for Hardware Acceleration (FPGAs, ASICs, etc.), AI-based Fault Detection and Reliability in Embedded Systems, AI Applications in Robotics & Automation, AI for Big Data Analytics, AI-driven Intrusion Detection in Networks, Ethical AI & Societal Impact, AI for Sustainable Development and Green AI.
          </li>
          <li>
            <span className="track-title">Track 2: Big Data Analytics</span><br/>
            Fundamentals of Big Data Analytics, Distributed Computing and Parallel Processing for Big Data, Cloud-based Big Data Solutions and Edge Computing, Machine Learning & AI for Big Data, Real-time Data Analytics and Stream Processing, Data Science & Statistical Analysis, Big Data Visualization and Interactive Dashboards, Big Data in Cybersecurity & Privacy, Blockchain for Secure Big Data Transactions, Industry Applications of Big Data, Big Data in Finance, Retail and E-commerce, Big Data Strategies, Real-Time and Streaming, Big Data Storage and Management.
          </li>
          <li>
            <span className="track-title">Track 3: Communication</span><br/>
            Wireless Communication & Networking, 6G Networks and Beyond, Optical and Satellite Communication, Free Space Optical (FSO) Communication, Photonic and Quantum Communication Technologies, Antenna and RF System Design, Metamaterial and Reconfigurable Antennas, AI-driven Antenna, AI-Driven Wireless Communication Systems, Energy-Efficient Wireless Communication, UAV and Drone Communication Networks Optimization, Low-Power VLSI Design for IoT Devices, MEMS and Nanoelectronics for Communication Systems, Photonic Integrated Circuits (PICs) for High-Speed Communication, Underwater Wireless Communication, Embedded System Security and Threat Detection, Cybersecurity in Communication Systems, Cryptographic Techniques for Secure Communication.
          </li>
          <li>
            <span className="track-title">Track 4: Signal Processing</span><br/>
            Algorithms and implementations, Image and video processing, Audio and speech processing, Error concealment techniques, Management of multimedia services, Test-beds and trials, Signal processing for Finance, Bioinformatics and Genomics, Compressed Sensing and Sparse Modeling, Computational Imaging/Spectral Imaging, Design/Implementation of Signal Processing Systems, DSP Algorithms and Architecture, Image/Video Processing & Data Compression, Image Forensics, Information Forensics and Security, Nonlinear Signal Processing, Optimization Techniques, Radar and Sonar Signal Processing, Sensor Array and Multichannel Signal Processing, Speech and Language Processing, Statistical Signal Processing.
          </li>
          <li>
            <span className="track-title">Track 5: Automation, Control and Robotics</span><br/>
            Intelligent Control Systems, IoT-Enabled Smart Control Systems, Process Control & Optimization, Smart Sensors & Actuators, Intelligent Sensor Networks for Automation, MEMS-Based Sensors and Actuators, AI for Sensor Fusion and Decision-Making, Robotics and Motion Control, Autonomous Vehicles and Motion Planning, AI-Based Trajectory Optimization and control, Automation in Energy Systems, Smart Grid Automation and Control, Renewable Energy Integration in Automation,, Safety, Security & Ethics in Automation, Ethics and Regulations in Autonomous Systems,  Autonomous and Intelligent Robots, Robotics in Manufacturing and Industry 4.0, Collaborative Robots (Cobots) in Smart Factories, Humanoid and Bio-Inspired Robotics, Emotion and Gesture Recognition in Robots , Swarm and Aerial Robotics, AI for Multi-Robot Coordination and Control, UAVs, Drones, and Autonomous Flying Robots, Medical and Healthcare Robotics, AI-Powered Surgical Robots, Robotics for Elderly Care and Rehabilitation, Robotic Perception and Vision, Computer Vision for Robotics Applications, Ethical, Security, and Societal Aspects.
          </li>
          <li>
            <span className="track-title">Track 6: VLSI and Embedded System </span><br/>
            Digital and Analog VLSI, ASIC and FPGA Design Methodologies, Reconfigurable Architectures and FPGA-based Systems Design, Emerging Memory Technologies, Quantum and Spintronics Circuits  VLSI Design Automation and CAD Tools , AI/ML for VLSI Design Automation Embedded Systems Design Microcontroller and Microprocessor-based Design, Real-Time Operating Systems (RTOS) FPGA-based Embedded Systems Hardware/Software Co-Design,  Cyber-Physical Systems   RISC-V Architectures and Implementations,  AI/ML Accelerators in Hardware, Edge AI Systems, 3D ICs and Heterogeneous Integration, Quantum Computing Circuits, Green Electronics and Sustainable VLSI Design, VLSI for Autonomous Vehicles, Blockchain-based Embedded Systems, AI-based Fault Diagnosis and Testing in VLSI AI-driven Embedded Security Systems in VLSI.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
