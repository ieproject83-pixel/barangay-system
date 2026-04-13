import React, { useState } from 'react';
import { Upload, CheckCircle, XCircle, Loader } from 'lucide-react';

function FileUpload({ onUploadComplete, requirementType }) {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);

  const displayName = requirementType ? requirementType.replace(/_/g, ' ').toUpperCase() : 'DOCUMENT';

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload JPEG or PNG files only');
      return;
    }

    if (file.size > 1 * 1024 * 1024) {
      setError('File size must be less than 1MB');
      return;
    }

    setUploading(true);
    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      if (onUploadComplete && requirementType) {
        onUploadComplete(requirementType, base64String);
      }
      setUploaded(true);
      setUploading(false);
    };
    reader.onerror = () => {
      setError('Failed to read file');
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {displayName}
      </label>
      <div style={{ 
        border: '2px dashed #ddd', 
        borderRadius: '8px', 
        padding: '20px',
        textAlign: 'center',
        background: uploaded ? '#dcfce7' : '#f9fafb'
      }}>
        {uploaded ? (
          <div>
            <CheckCircle color="#10b981" size={32} style={{ margin: '0 auto' }} />
            <p style={{ color: '#10b981', marginTop: '10px' }}>Uploaded successfully!</p>
            <button 
              onClick={() => {
                setUploaded(false);
                if (onUploadComplete && requirementType) {
                  onUploadComplete(requirementType, null);
                }
              }}
              style={{ background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div>
            <Upload size={32} style={{ margin: '0 auto', color: '#666' }} />
            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleUpload}
              disabled={uploading}
              style={{ marginTop: '10px' }}
            />
            {uploading && (
              <div style={{ marginTop: '10px' }}>
                <Loader size={20} style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }} />
                <span style={{ marginLeft: '10px' }}>Processing...</span>
              </div>
            )}
            {error && (
              <div style={{ color: '#dc2626', marginTop: '10px', fontSize: '14px' }}>
                <XCircle size={16} style={{ display: 'inline', marginRight: '5px' }} />
                {error}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;