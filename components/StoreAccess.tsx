import React from 'react';
import { MapPin, Clock, Phone, Mail, Brain as Train } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreInfo } from '../data/stores';
import { FadeIn } from './FadeIn';

interface StoreAccessProps {
  store: StoreInfo;
}

export function StoreAccess({ store }: StoreAccessProps) {
  return (
    <section id="access" className="section-dark py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="caption text-accent mb-6">Access</p>
            <h2>{store.name}</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-[#111] p-10 md:p-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 text-[#B7A482] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="mb-2 text-sm">住所</h4>
                  <p className="text-[#A8A29E]">
                    {store.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}{i < store.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Train className="w-4 h-4 text-[#B7A482] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="mb-2 text-sm">アクセス</h4>
                  <p className="text-[#A8A29E]">{store.access}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-4 h-4 text-[#B7A482] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="mb-2 text-sm">営業時間</h4>
                  <p className="text-[#A8A29E]">
                    {store.hours}<br />
                    定休日：{store.closedDay}
                  </p>
                </div>
              </div>

              {store.phone && (
                <div className="flex items-start space-x-4">
                  <Phone className="w-4 h-4 text-[#B7A482] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2 text-sm">電話番号</h4>
                    <p className="text-[#A8A29E]">{store.phone}</p>
                  </div>
                </div>
              )}

              {store.email && (
                <div className="flex items-start space-x-4">
                  <Mail className="w-4 h-4 text-[#B7A482] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2 text-sm">メールアドレス</h4>
                    <p className="text-[#A8A29E]">{store.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              to="/reserve"
              className="cta inline-flex items-center gap-3"
            >
              <span>ご予約はこちら</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
