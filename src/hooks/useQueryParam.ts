// src/hooks/useQueryParam.ts
import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useQueryParam(key: string, initial = '') {
  const [sp, setSp] = useSearchParams();
  const value = sp.get(key) ?? initial;
  const set = useCallback((v: string) => {
    const next = new URLSearchParams(sp);
    if (v) {
      next.set(key, v);
    } else {
      next.delete(key);
    }
    setSp(next, { replace: true });
  }, [sp, setSp, key]);
  return useMemo(() => [value, set] as const, [value, set]);
}
