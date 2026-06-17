/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CopywritingResult {
  headline: string;
  hook: string;
  bodyText: string;
  callToAction: string;
}

export interface TargetingConfig {
  locations: string[];
  exclusions: string[];
  ageRange: string;
  genders: string;
  interests: string[];
  placementAdvice: string;
}

export interface SalesStrategy {
  nicheName: string;
  campaignObjective: string;
  copyExamples: CopywritingResult[];
  targeting: TargetingConfig;
  budgetAdvice: string;
  fastSaleTips: string[];
}

export interface AngolanPreset {
  id: string;
  title: string;
  emoji: string;
  description: string;
  typicalAOV: number; // Average Order Value in Kz
  typicalCPC: number; // Cost per Click/Message in Kz
  typicalCloseRate: number; // WhatsApp conversation close rate (%)
  strategy: SalesStrategy;
}
