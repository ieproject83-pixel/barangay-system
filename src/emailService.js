import emailjs from '@emailjs/browser';

const PUBLIC_KEY = "c0taJ8w7N3Mpz-NVO";
const SERVICE_ID = "service_bumf59n";
const TEMPLATE_ID = "template_jl1jbvr";

emailjs.init(PUBLIC_KEY);

const getRequirements = (documentType) => {
  const requirements = {
    'Barangay Clearance': '✓ Valid ID\n✓ Cedula\n✓ Barangay fee (P20-P100)',
    'Certificate of Residency': '✓ Valid ID with address\n✓ Proof of residence\n✓ Cedula',
    'Certificate of Indigency': '✓ Valid ID\n✓ Proof of residency\n✓ Cedula\n✓ Barangay interview',
    'Barangay Business Clearance': '✓ DTI/SEC registration\n✓ Valid ID\n✓ Cedula\n✓ Business address proof',
    'Barangay Permit': '✓ Written request\n✓ Valid ID\n✓ Cedula\n✓ Activity description',
    'Barangay ID': '✓ Proof of residency\n✓ Birth certificate\n✓ Cedula\n✓ 1x1 photo',
    'Barangay Certification': '✓ Valid ID\n✓ Proof of residency\n✓ Cedula'
  };
  return requirements[documentType] || '✓ Valid ID\n✓ Proof of residency\n✓ Cedula';
};

// Send approval email
export const sendApprovalEmail = async (userEmail, userName, appointmentDetails) => {
  const templateParams = {
    to_email: userEmail,
    to_name: userName,
    subject: `✅ Appointment Approved - Queue #${appointmentDetails.queueNumber}`,
    message: 'Your appointment has been approved! Please find your appointment details below.',
    queue_number: appointmentDetails.queueNumber,
    document_type: appointmentDetails.documentType,
    appointment_date: appointmentDetails.date,
    appointment_time: appointmentDetails.time,
    barangay: "Barangay Del Pilar, City of San Fernando",
    requirements: appointmentDetails.requirements,
    comments: ''
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    console.log('Approval email sent:', response);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false };
  }
};

// Send rejection email
export const sendRejectionEmail = async (userEmail, userName, documentType, comments) => {
  const templateParams = {
    to_email: userEmail,
    to_name: userName,
    subject: `❌ Appointment Rejected - ${documentType}`,
    message: 'Your appointment request has been rejected. Please review the comments below.',
    queue_number: '',
    document_type: documentType,
    appointment_date: '',
    appointment_time: '',
    barangay: "Barangay Del Pilar, City of San Fernando",
    requirements: '',
    comments: comments
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    console.log('Rejection email sent:', response);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false };
  }
};

// Send booking confirmation email
export const sendBookingConfirmation = async (userEmail, userName, appointmentDetails) => {
  const templateParams = {
    to_email: userEmail,
    to_name: userName,
    subject: `📋 Appointment Request Received - ${appointmentDetails.documentType}`,
    message: 'Your appointment request has been received and is pending admin approval. You will receive another email once approved or rejected.',
    queue_number: 'Pending',
    document_type: appointmentDetails.documentType,
    appointment_date: appointmentDetails.date,
    appointment_time: appointmentDetails.time,
    barangay: "Barangay Del Pilar, City of San Fernando",
    requirements: getRequirements(appointmentDetails.documentType),
    comments: ''
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    console.log('Booking confirmation email sent:', response);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false };
  }
};