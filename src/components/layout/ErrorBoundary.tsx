import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Nestora platform:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#F3EFE6] border border-[#E8E3D6] rounded-2xl p-8 text-center space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#E6F2EA] text-[#0F6B4A] mx-auto flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-[#0B1F17]">System View Interrupted</h1>
              <p className="text-xs text-[#64736B] leading-relaxed">
                An unexpected state occurred while rendering this interface. Our client session has captured the event.
              </p>
            </div>
            {this.state.error && (
              <pre className="text-[11px] font-mono text-left bg-white p-3 rounded-lg border border-[#E8E3D6] overflow-x-auto text-[#2D3A34]">
                {this.state.error.message}
              </pre>
            )}
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.location.reload()}
                leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              >
                Reload Interface
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
