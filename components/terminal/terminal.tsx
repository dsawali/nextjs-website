
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { commands, CommandKey } from './commands';

interface TerminalLine {
  type: 'input' | 'output';
  content: string | React.ReactNode;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to my Terminal. Type "help" to get started.' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const commandText = input.trim().toLowerCase();
    
    if (!commandText) return;

    const newHistory: TerminalLine[] = [...history, { type: 'input', content: input }];

    if (commandText in commands) {
      const command = commands[commandText as CommandKey];
      const result = command.action(setHistory);
      if (result !== null) {
        newHistory.push({ type: 'output', content: result });
      }
    } else {
      newHistory.push({ type: 'output', content: `Command not found: ${commandText}. Type "help" for a list of commands.` });
    }

    // Special case for clear: if clear was called, it will reset history via setHistory([]) in the action
    // but the state update is asynchronous. So if we setHistory(newHistory) here, it might overwrite the clear.
    // However, the action returns null for clear, so we just handle it based on that.
    if (commandText === 'clear') {
        // Clear is handled by the action
    } else {
        setHistory(newHistory);
    }
    
    setInput('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="window-terminal w-full h-full" 
      onClick={focusInput}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto mb-4 scrollbar-hide h-full flex flex-col">
        <div>
          {history.map((line, index) => (
            <div key={index} className="mb-2">
              {line.type === 'input' ? (
                <div className="flex">
                  <span className="mr-2">davis@portfolio:~$</span>
                  <span>{line.content}</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-[#2ea019]">{line.content}</div>
              )}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleCommand} className="flex shrink-0">
          <span className="mr-2">davis@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-[#4af626] focus:ring-0 p-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
