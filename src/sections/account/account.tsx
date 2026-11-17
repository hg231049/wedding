import { useState } from "react";
import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy, Check, Plus } from "lucide-react";
import "../../css/account.css";
import { AccountData } from "@/util/account-data";

export default function Account() {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    AccountData.map((_, idx) => idx),
  );

  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  // 계좌 그룹 토글
  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((index) => index !== idx)
        : [...prev, idx],
    );
  };

  // 계좌번호 복사
  const handleCopy = async (bank: string, number: string) => {
    const textCopy = `${bank} ${number}`;

    try {
      await navigator.clipboard.writeText(textCopy);

      setCopiedAccount(textCopy);
      toast.success("계좌번호가 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했습니다. 직접 복사해주세요.");
    }
  };

  return (
    <section className="account-section">
      <div className="inner">
        <SectionTitle mainTitle="Account" subTitle="마음 전하실 곳" />

        <div className="account-list">
          {AccountData.map((family, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div key={idx} className="account-group">
                {/* 계좌 그룹 토글 */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="account-toggle"
                  aria-expanded={isOpen}
                >
                  <span className="account-group-title">{family.group}</span>

                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    className={`account-toggle-icon transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {/* 계좌 내용 */}
                <div className={`account-content ${isOpen ? "is-open" : ""}`}>
                  <div className="account-content-inner">
                    <div className="account-items">
                      {family.accounts.map((acc, aIdx) => {
                        const accountKey = `${acc.bank} ${acc.number}`;

                        const isCopied = copiedAccount === accountKey;

                        return (
                          <div key={aIdx} className="account-item">
                            <div className="account-info">
                              <div className="account-name">
                                <span className="account-role">
                                  [{acc.role}]
                                </span>

                                <strong>{acc.name}</strong>
                              </div>

                              <div className="account-number">
                                {acc.bank} {acc.number}
                              </div>
                            </div>

                            {/* shadcn 복사 버튼 */}
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleCopy(acc.bank, acc.number)}
                              className="account-copy gap-1.5"
                            >
                              {isCopied ? (
                                <Check size={14} />
                              ) : (
                                <Copy size={14} />
                              )}

                              {isCopied ? "완료" : "복사"}
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
