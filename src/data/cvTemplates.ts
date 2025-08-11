// src/data/cvTemplates.ts
export const RESUME_TEMPLATE_1 = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{{profile.name}} — CV</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    /* ---- Page & typography (PDF-friendly) ---- */
    @page { size: A4; margin: 18mm; }
    html, body { margin: 0; padding: 0; }
    body {
      font: 12px/1.45 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      color: #111827;
      background: #fff;
    }
    .page { max-width: 180mm; margin: 0 auto; }
    .section { margin-top: 10mm; }
    .section h2 {
      font-size: 12px; letter-spacing: 1.1px; text-transform: uppercase;
      color: #6b7280; margin: 0 0 4mm; font-weight: 700; border-bottom: 1px solid #e5e7eb; padding-bottom: 2mm;
    }
    .muted { color: #6b7280; }
    .chip { display:inline-block; background:#f3f4f6; padding:2px 6px; border-radius:4px; margin-right:4px; }

    /* ---- Header ---- */
    .header { display:grid; grid-template-columns: 2fr 1.2fr; gap: 12mm; align-items:start; }
    .name { font-size: 28px; font-weight: 700; margin: 0; letter-spacing:.2px; }
    .title { font-size: 14px; color:#4b5563; margin: 2mm 0 0; }
    .contact { font-size:11px; color:#374151; }
    .contact a { color:inherit; text-decoration:none; }

    /* ---- Experience ---- */
    .job { margin-bottom: 6mm; break-inside: avoid; page-break-inside: avoid; }
    .job-head { display:grid; grid-template-columns: 1fr auto; gap:8px; align-items:baseline; }
    .company { font-weight:600; }
    .meta { color:#6b7280; font-size:11px; }
    .role { font-weight:600; margin-top:1mm; }
    .bullets { margin:2mm 0 0 0; padding-left:4mm; }
    .bullets li { margin:.8mm 0; }

    /* ---- Projects & Education ---- */
    .proj, .edu { margin-bottom: 6mm; break-inside: avoid; page-break-inside: avoid; }

    /* ---- Skills ---- */
    .cols { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4mm 10mm; }
    .kv dt { font-weight: 600; }
    .kv dd { margin: 0 0 2mm 0; color: #374151; }

    /* ---- Footer ---- */
    .foot { margin-top: 10mm; font-size:10px; color:#6b7280; text-align:right; }
  </style>
</head>
<body>
  <div class="page">

    <!-- Header -->
    <header class="section header" style="margin-top:0;">
      <div>
        <h1 class="name">{{profile.name}}</h1>
        {{#if profile.title}}<p class="title">{{profile.title}}</p>{{/if}}
      </div>
      <div class="contact">
        {{#if profile.location}}<div class="chip">{{profile.location}}</div>{{/if}}
        {{#if profile.email}}<div><strong>Email:</strong> {{profile.email}}</div>{{/if}}
        {{#if profile.phone}}<div><strong>Phone:</strong> {{profile.phone}}</div>{{/if}}
        {{#if profile.website}}<div><strong>Website:</strong> <a href="{{profile.website}}">{{profile.website}}</a></div>{{/if}}
      </div>
    </header>

    <!-- Summary -->
    {{#if profile.summary}}
    <section class="section">
      <h2>Summary</h2>
      <p>{{profile.summary}}</p>
    </section>
    {{/if}}

    <!-- Experience -->
    {{#if experience}}
    <section class="section">
      <h2>Experience</h2>
      {{#each experience}}
      <article class="job">
        <div class="job-head">
          <div class="company">{{company}}{{#if location}} • {{location}}{{/if}}</div>
          <div class="meta">{{start}}{{#if end}} – {{end}}{{else}} – Present{{/if}}</div>
        </div>
        <div class="role">{{role}}</div>
        {{#if summary}}<p>{{summary}}</p>{{/if}}
        {{#if bullets}}
          <ul class="bullets">
            {{#each bullets}}<li>{{this}}</li>{{/each}}
          </ul>
        {{/if}}
      </article>
      {{/each}}
    </section>
    {{/if}}

    <!-- Projects -->
    {{#if projects}}
    <section class="section">
      <h2>Projects</h2>
      {{#each projects}}
      <div class="proj">
        <div class="job-head">
          <div class="company">{{name}}</div>
          <div class="meta">{{#if link}}<a href="{{link}}">{{link}}</a>{{/if}}</div>
        </div>
        {{#if description}}<p>{{description}}</p>{{/if}}
        {{#if bullets}}
          <ul class="bullets">{{#each bullets}}<li>{{this}}</li>{{/each}}</ul>
        {{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}

    <!-- Education -->
    {{#if education}}
    <section class="section">
      <h2>Education</h2>
      {{#each education}}
      <div class="edu">
        <div class="company">{{school}}</div>
        <div class="meta">{{degree}}{{#if field}}, {{field}}{{/if}} • {{start}}–{{end}}</div>
        {{#if notes}}<p>{{notes}}</p>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}

    <!-- Skills -->
    {{#if skills}}
    <section class="section">
      <h2>Skills</h2>

      {{#if skills.list}}
        <p>{{#each skills.list}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}</p>
      {{/if}}

      {{#if skills.groups}}
      <dl class="cols kv">
        {{#each skills.groups}}
          <div>
            <dt>{{@key}}</dt>
            <dd>{{#each this}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}</dd>
          </div>
        {{/each}}
      </dl>
      {{/if}}
    </section>
    {{/if}}

    <div class="foot">
      Generated for {{profile.name}}{{#if meta.position}} — {{meta.position}}{{/if}}{{#if meta.generated_by}} • {{meta.generated_by}}{{/if}}
    </div>
  </div>
</body>
</html>
`;