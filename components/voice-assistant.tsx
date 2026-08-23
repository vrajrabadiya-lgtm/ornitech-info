'use client'

import { useState, useRef } from 'react'
import {
  ConversationAgent,
  BrowserAudioInterface,
  InteractionType,
} from 'sarvam-conv-ai-sdk/browser'
import { Mic, Square } from 'lucide-react'

export function VoiceAssistant() {
  const [isCalling, setIsCalling] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const agentRef = useRef<any>(null)

  const startCall = async () => {
    setIsLoading(true)
    try {
      const agent = new ConversationAgent({
        apiKey: process.env.NEXT_PUBLIC_SARVAM_API_KEY || '<your-api-key>',
        platform: 'browser',
        config: {
          org_id: '019eee7f-bc15-7d4e-98b3-b00e441306ce',
          workspace_id: '019eee7f-bc1b-7ebc-94ae-c897911b6d95',
          app_id: process.env.NEXT_PUBLIC_SARVAM_APP_ID || '<agent_id>',
          user_identifier_type: 'custom',
          user_identifier: 'user123',
          interaction_type: InteractionType.CALL,
          input_sample_rate: 16000,
          output_sample_rate: 16000,
        },
        audioInterface: new BrowserAudioInterface(),
      })

      agentRef.current = agent
      await agent.start()
      await agent.waitForConnect(10)
      setIsCalling(true)
    } catch (error) {
      console.error('Failed to start voice call:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const endCall = async () => {
    if (agentRef.current) {
      // Depending on the SDK, call the appropriate disconnect method.
      try {
        if (typeof agentRef.current.stop === 'function') {
          await agentRef.current.stop()
        }
      } catch (e) {
        console.error('Error stopping agent', e)
      }
      setIsCalling(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={isCalling ? endCall : startCall}
        disabled={isLoading}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all ${
          isCalling ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        } text-white`}
      >
        {isLoading ? (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : isCalling ? (
          <Square className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
