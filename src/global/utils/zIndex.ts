const LEVEL = {
  component: 100,
  layout: 200,
  top: 300,
} as const;

type Level = keyof typeof LEVEL;

/**
 * @param level
 * UI 노출 단계에 맞는 level을 선택합니다.
 * * [component] - 컴포넌트 내부 레벨 (예시: tooltip)
 * * [layout] - 헤더, 푸터 등과 같은 레이아웃 레벨 (예시: 모바일용 하단 nav)
 * * [top] - 전역 최상단 레벨 (예시: modal/toast)
 *
 * @param addOn
 * * 동일 level 내에서의 우선 순위를 결정합니다.
 * * (0 ~ 99)의 값만 허용합니다
 *
 * @returns
 * 레벨 base 값 + addOn
 */
export const getZIndex = (level: Level, addOn = 0) => {
  if (addOn < 0 || addOn >= 100) throw new RangeError("addOn은 0~99의 값이어야 합니다.");
  return LEVEL[level] + addOn;
};
