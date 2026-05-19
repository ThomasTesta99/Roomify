interface AuthState {
  isSignedIn: boolean;
  userName: string | null;
  userId: string | null;
}

interface UploadProps {
    onComplete?: (base64Data: string) => void;
}

type AuthContext = {
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}