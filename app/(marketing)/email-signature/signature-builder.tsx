'use client'

import { useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'

const PHONE_DEFAULT = '928-228-0377'

// Build the exact signature HTML from the team member's details. Kept as a
// string so we can both render a preview and copy it to the clipboard.
function buildSignatureHtml({
  fullName,
  jobTitle,
  username,
  phone,
}: {
  fullName: string
  jobTitle: string
  username: string
  phone: string
}): string {
  const name = fullName.trim() || 'Full Name'
  const title = jobTitle.trim() || 'Job Title'
  const user = username.trim().toLowerCase() || 'username'
  const tel = phone.trim() || PHONE_DEFAULT
  const telDigits = tel.replace(/[^0-9]/g, '')
  const email = `${user}@miraclemanplumbing.net`

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;">
  <tr>
    <td style="vertical-align:middle;padding-right:16px;border-right:3px solid #E0B030;">
      <img src="https://www.miraclemanplumbing.net/MiracleMan_Logo_Colour.png" width="115" alt="Miracle Man Plumbing" style="display:block;width:115px;height:auto;border:0;">
    </td>
    <td style="vertical-align:middle;padding-left:16px;">
      <div style="font-size:18px;font-weight:bold;color:#B8860B;line-height:1.2;">${name}</div>
      <div style="font-size:12px;font-weight:bold;color:#B8860B;letter-spacing:0.5px;text-transform:uppercase;padding-top:2px;">${title}</div>
      <div style="padding-top:7px;font-size:13px;color:#B8860B;line-height:1.5;white-space:nowrap;">
        <a href="tel:${telDigits}" style="color:#B8860B;text-decoration:none;font-weight:bold;white-space:nowrap;">${tel}</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="mailto:${email}" style="color:#B8860B;text-decoration:none;">${email}</a>
      </div>
      <div style="padding-top:7px;">
        <a href="https://miraclemanplumbing.net" style="display:inline-block;background:#E0B030;color:#1a1a1a;font-size:11px;font-weight:bold;text-decoration:none;padding:6px 13px;border-radius:4px;text-transform:uppercase;letter-spacing:0.5px;">Book Online &rsaquo;</a>
      </div>
      <div style="padding-top:8px;font-size:10px;color:#666666;line-height:1.4;white-space:nowrap;">
        475+ 5-Star Reviews &nbsp;&bull;&nbsp; Family Owned &nbsp;&bull;&nbsp; 24/7 Service
      </div>
      <div style="font-size:10px;color:#888888;padding-top:1px;line-height:1.4;white-space:nowrap;">
        Licensed, Bonded &amp; Insured &nbsp;&bull;&nbsp; ROC 286195 &nbsp;&bull;&nbsp; ROC 232054
      </div>
    </td>
  </tr>
</table>`
}

export function SignatureBuilder() {
  const [fullName, setFullName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState(PHONE_DEFAULT)
  const [copied, setCopied] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)

  const html = buildSignatureHtml({ fullName, jobTitle, username, phone })

  const handleCopy = async () => {
    const node = previewRef.current
    if (!node) return

    // Preferred path: copy the rendered signature as rich HTML so it pastes
    // formatted into Gmail's signature box.
    try {
      if (navigator.clipboard && 'write' in navigator.clipboard) {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([node.innerText], { type: 'text/plain' }),
        })
        await navigator.clipboard.write([item])
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
        return
      }
    } catch {
      // fall through to the selection-based fallback
    }

    // Fallback (older Safari): select the rendered node and execCommand copy.
    try {
      const range = document.createRange()
      range.selectNodeContents(node)
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(range)
      document.execCommand('copy')
      sel?.removeAllRanges()
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      alert('Copy failed — please select the signature above and copy manually.')
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]'

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-2">
            Email Signature Builder
          </h1>
          <p className="text-gray-600">
            Fill in your info, copy the signature, and paste it into Gmail.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Caleb Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Master Plumber"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Username
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="caleb"
                  className={`${inputClass} rounded-r-none`}
                />
                <span className="px-3 py-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-100 text-gray-500 text-sm whitespace-nowrap">
                  @miraclemanplumbing.net
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={PHONE_DEFAULT}
                className={inputClass}
              />
              <p className="text-xs text-gray-400 mt-1">
                Defaults to the main line. Change it only if you have your own.
              </p>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Preview</p>
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 overflow-x-auto">
            <div
              ref={previewRef}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition-colors ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-[#0B2545] hover:bg-[#091B36] text-white'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              Copied! Now paste it into Gmail
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              Copy Signature
            </>
          )}
        </button>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-8">
          <h2 className="text-xl font-bold text-[#0B2545] mb-4">
            How to add this to Gmail
          </h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                1
              </span>
              <span>
                Fill in your info above, then tap{' '}
                <strong>Copy Signature</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                2
              </span>
              <span>
                Open Gmail on a computer. Click the{' '}
                <strong>gear icon</strong> (top right) →{' '}
                <strong>See all settings</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                3
              </span>
              <span>
                On the <strong>General</strong> tab, scroll down to the{' '}
                <strong>Signature</strong> section. Click{' '}
                <strong>+ Create new</strong>, give it a name (e.g. &ldquo;Work&rdquo;),
                and click <strong>Create</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                4
              </span>
              <span>
                Click inside the signature box and{' '}
                <strong>paste</strong> (Ctrl+V, or Cmd+V on a Mac). Your full
                signature should appear with the logo and gold styling.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                5
              </span>
              <span>
                Under <strong>Signature defaults</strong>, set your new
                signature for both <strong>FOR NEW EMAILS</strong> and{' '}
                <strong>ON REPLY/FORWARD</strong> so it&apos;s always used.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EDB23A] text-white font-bold flex items-center justify-center text-sm">
                6
              </span>
              <span>
                Scroll to the bottom and click{' '}
                <strong>Save Changes</strong>. Send yourself a test email to
                confirm it looks right.
              </span>
            </li>
          </ol>

          <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
            <strong>Tip:</strong> Gmail signatures must be set up on a computer
            (desktop browser). The mobile Gmail app can&apos;t paste a formatted
            signature, but once you set it on a computer it automatically applies
            on your phone too.
          </div>
        </div>
      </div>
    </section>
  )
}
