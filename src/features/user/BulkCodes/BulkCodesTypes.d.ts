export interface Recipient {
  recipient_name: string;
  recipient_email: string;
  recipient_notify: string;
  units: string;
  recipient_message: string;
  recipient_occasion: string;
}

interface OtherRecipientProperties {
  [key: string]: string;
}

type ExtendedRecipient = Recipient & OtherRecipientProperties;

type FileImportErrorCode =
  | 'fileInvalidType'
  | 'fileTooLarge'
  | 'fileTooSmall'
  | 'tooManyFiles'
  | 'missingColumns'
  | 'noRecipientData'
  | 'unitsNotProvided'
  | 'notifyNotPossible'
  | 'invalidEmails'
  | 'generalError';

export interface FileImportError {
  type: FileImportErrorCode;
  message: string;
}

export type UploadStates = 'empty' | 'processing' | 'success' | 'error';
