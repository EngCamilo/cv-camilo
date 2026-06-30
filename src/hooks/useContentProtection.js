import { useEffect } from 'react';

export default function useContentProtection() {
  useEffect(() => {
    // Allow normal interaction in editable controls while discouraging copy actions on public content.
    const isEditableTarget = (target) => {
      if (!(target instanceof HTMLElement)) return false;

      return Boolean(
        target.closest('input, textarea, select, option, [contenteditable="true"], [data-allow-copy="true"]')
      );
    };

    const handleContextMenu = (event) => {
      if (isEditableTarget(event.target)) return;
      event.preventDefault();
    };

    const handleDragStart = (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    const handleCopyActions = (event) => {
      if (isEditableTarget(event.target)) return;
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      if (isEditableTarget(event.target)) return;

      const key = event.key.toLowerCase();
      const hasModifier = event.ctrlKey || event.metaKey;
      const blockedShortcuts = ['c', 's', 'u', 'a'];
      const blockedDevtools = key === 'i' || key === 'j';

      if ((hasModifier && blockedShortcuts.includes(key)) || (hasModifier && event.shiftKey && blockedDevtools) || key === 'f12') {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopyActions);
    document.addEventListener('cut', handleCopyActions);
    document.addEventListener('selectstart', handleCopyActions);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopyActions);
      document.removeEventListener('cut', handleCopyActions);
      document.removeEventListener('selectstart', handleCopyActions);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
