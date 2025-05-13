import React from "react";
import "./ConferenceTracks.css";

function ConferenceTracks() {
  return (
    
    <div className="tracks-container">
      <div className="track">
        <h2>PUBLICATION DETAILS</h2>
        <p>
          Selected papers will be published in International Journal of Innovative Research in Technology - an UGC approved journal (IJIRT)
        </p>
      </div>
      <h2>Conference Tracks and Topics</h2>
      <p>
        The conference will be conducted in six parallel tracks. Topics of interest in each track include, but are not limited to, the following:
      </p>
      
      <div className="track">
        <h3>Track 1: Artificial Intelligence and Machine Learning</h3>
        <p>
          Foundations of AI & ML, Reinforcement Learning and Deep Reinforcement Learning, Deep Learning & Neural Networks, Generative AI,
          Multimodal AI, Neuromorphic Computing, AI for Signal Processing & Communication, AI-based Image, Speech, and Video Processing,
          AI for Biomedical Signal Analysis, AI in VLSI and Automation, AI for Hardware Acceleration (FPGAs, ASICs, etc), AI-based Fault
          Detection and Reliability in Embedded Systems, AI Applications in Robotics & Automation, AI for Big Data Analytics, AI-driven Intrusion
          Detection in Networks, Ethical AI & Societal Impact, AI for Sustainable Development and Green AI.
        </p>
      </div>
      
      <div className="track">
        <h3>Track 2: Big Data Analytics</h3>
        <p>
          Fundamentals of Big Data Analytics, Distributed Computing and Parallel Processing for Big Data, Cloud-based Big Data Solutions and Edge Computing,
          Machine Learning & AI for Big Data, Real-time Data Analytics and Stream Processing, Data Science & Statistical Analysis, Big Data Visualization and
          Interactive Dashboards, Big Data in Cybersecurity & Privacy, Blockchain for Secure Big Data Transactions, Industry Applications of Big Data, Big Data
          in Finance, Retail, and E-commerce, Big Data Strategies, Real-Time and Streaming, Big Data Storage and Management.
        </p>
      </div>
      
      <div className="track">
        <h3>Track 3: Communication</h3>
        <p>
          Wireless Communication & Networking, 6G Networks and Beyond, Optical and Satellite Communication, Free Space Optical (FSO) Communication,
          Photonic and Quantum Communication Technologies, Antenna and RF System Design, Metamaterial and Reconfigurable Antennas, AI-driven Antenna,
          AI-Driven Wireless Communication Systems, Energy-Efficient Wireless Communication, UAV and Drone Communication Networks Optimization, Low-Power
          VLSI Design for IoT Devices, MEMS and Nanoelectronics for Communication Systems, Photonic Integrated Circuits (PICs) for High-Speed Communication,
          Underwater Wireless Communication, Embedded System Security and Threat Detection, Cybersecurity in Communication Systems, Cryptographic Techniques
          for Secure Communication.
        </p>
      </div>
      
      <div className="track">
        <h3>Track 4: Signal Processing</h3>
        <p>
          Algorithms and implementations, Image and Video Processing, Audio and Speech Processing, Error Concealment Techniques, Management of Multimedia
          Services, Test-beds and Trials, Signal Processing for Finance, Bioinformatics, and Genomics, Compressed Sensing and Sparse Modeling, Computational
          Imaging/Spectral Imaging, Design/Implementation of Signal Processing Systems, DSP Algorithms and Architecture, Image/Video Processing & Data
          Compression, Image Forensics, Information Forensics and Security, Nonlinear Signal Processing, Optimization Techniques, Radar and Sonar Signal
          Processing, Sensor Array and Multichannel Signal Processing, Signal Processing Theory and Methods, Speech and Language Processing, Statistical Signal
          Processing.
        </p>
      </div>
      
      <div className="track">
        <h3>Track 5: Automation, Control, and Robotics</h3>
        <p>
          Intelligent Control Systems, IoT-Enabled Smart Control Systems, Process Control & Optimization, Smart Sensors & Actuators, Intelligent Sensor Networks
          for Automation, MEMS-Based Sensors and Actuators, AI for Sensor Fusion and Decision-Making, Robotics and Motion Control, Autonomous Vehicles and Motion
          Planning, AI-Based Trajectory Optimization and Control, Automation in Energy Systems, Smart Grid Automation and Control, Renewable Energy Integration
          in Automation, Safety, Security & Ethics in Automation, Ethics and Regulations in Autonomous Systems, Autonomous and Intelligent Robots, Robotics in
          Manufacturing and Industry 4.0, Collaborative Robots (Cobots) in Smart Factories, Humanoid and Bio-Inspired Robotics, Emotion and Gesture Recognition
          in Robots, Swarm and Aerial Robotics, AI for Multi-Robot Coordination and Control, UAVs, Drones, and Autonomous Flying Robots, Medical and Healthcare
          Robotics, AI-Powered Surgical Robots, Robotics for Elderly Care and Rehabilitation, Robotic Perception and Vision, Computer Vision for Robotics
          Applications, Ethical, Security, and Societal Aspects.
        </p>
      </div>
      
      <div className="track">
        <h3>Track 6: VLSI and Embedded Systems</h3>
        <p>
          Digital and Analog VLSI, ASIC and FPGA Design Methodologies, Reconfigurable Architectures and FPGA-based Systems Design, Emerging Memory Technologies,
          Quantum and Spintronics Circuits, VLSI Design Automation and CAD Tools, AI/ML for VLSI Design Automation, Embedded Systems Design, Microcontroller and
          Microprocessor-based Design, Real-Time Operating Systems (RTOS), FPGA-based Embedded Systems, Hardware/Software Co-Design, Cyber-Physical Systems,
          RISC-V Architectures and Implementations, AI/ML Accelerators in Hardware, Edge AI Systems, 3D ICs and Heterogeneous Integration, Quantum Computing
          Circuits, Green Electronics and Sustainable VLSI Design, VLSI for Autonomous Vehicles, Blockchain-based Embedded Systems, AI-based Fault Diagnosis
          and Testing in VLSI, AI-driven Embedded Security Systems in VLSI.
        </p>
      </div>
    </div>
  );
}

export default ConferenceTracks;