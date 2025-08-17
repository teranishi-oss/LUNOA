"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "美容整体 LUNOA の新サービス",
        action: {
          text: "詳細を見る",
          href: "#services",
        },
      }}
      title="美しさと健康を根本から整える"
      description="骨格・筋肉・内臓の歪みを整え、根本的な美しさと健康を追求する美容整体サロンです。一人ひとりの体の状態に合わせたオーダーメイドの施術で、理想の美しさを実現します。"
      actions={[
        {
          text: "ご予約はこちら",
          href: "https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238",
          variant: "glow",
        },
        {
          text: "サービス詳細",
          href: "#services",
          variant: "outline",
          icon: <Icons.logo className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "",
        dark: "",
        alt: "整体サロン LUNOA の施術風景",
      }}
    />
  )
}