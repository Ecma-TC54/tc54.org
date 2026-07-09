'use strict';
let multipageMap = JSON.parse(`{"index":["ecma-logo","metadata-block","_ref_0","sec-intro"],"scope":["sec-scope"],"conformance":["sec-conformance"],"normative-references":["sec-normative-references"],"overview":["sec-overview"],"purl-specification":["sec-purl-specification","sec-purl-specification-purl-is-a-url","sec-purl-specification-permitted-characters","sec-purl-specification-separator-characters","sec-purl-specification-character-encoding","_ref_1","sec-purl-specification-case-folding","sec-purl-specification-component-rules","_ref_2","_ref_3","_ref_4","sec-purl-specification-rules-scheme","sec-purl-specification-rules-type","sec-purl-specification-rules-namespace","sec-purl-specification-rules-name","sec-purl-specification-rules-version","sec-purl-specification-rules-qualifiers","_ref_5","sec-purl-specification-rules-subpath"],"purl-type-schema":["sec-purl-type-schema","sec--type","sec--type-name","sec--description","sec--repository","sec--repository-use-repository","sec--repository-default-repository-url","sec--repository-note","sec--namespace-definition","sec--namespace-definition-requirement","sec--namespace-definition-requirement-1","sec--namespace-definition-requirement-2","sec--namespace-definition-requirement-3","sec--namespace-definition-permitted-characters","sec--namespace-definition-case-sensitive","sec--namespace-definition-normalization-rules","sec--namespace-definition-native-name","sec--namespace-definition-note","sec--name-definition","sec--name-definition-requirement","sec--name-definition-requirement-1","sec--name-definition-permitted-characters","sec--name-definition-case-sensitive","sec--name-definition-normalization-rules","sec--name-definition-native-name","sec--name-definition-note","sec--version-definition","sec--version-definition-requirement","sec--version-definition-requirement-1","sec--version-definition-permitted-characters","sec--version-definition-case-sensitive","sec--version-definition-normalization-rules","sec--version-definition-native-name","sec--version-definition-note","sec--qualifiers-definition","sec--qualifiers-definition-","sec--qualifiers-definition-key","sec--qualifiers-definition-requirement","sec--qualifiers-definition-requirement-1","sec--qualifiers-definition-requirement-2","sec--qualifiers-definition-description","sec--qualifiers-definition-default-value","sec--qualifiers-definition-native-name","sec--subpath-definition","sec--subpath-definition-requirement","sec--subpath-definition-requirement-1","sec--subpath-definition-permitted-characters","sec--subpath-definition-case-sensitive","sec--subpath-definition-normalization-rules","sec--subpath-definition-native-name","sec--subpath-definition-note","sec--examples","sec--note","sec--reference-urls"],"schemas":["sec-schemas"],"bibliography":["sec-bibliography"],"colophon":["sec-colophon"],"copyright-and-software-license":["sec-copyright-and-software-license","copyright-notice"]}`);
'use strict';
let idToSection = Object.create(null);
for (let [section, ids] of Object.entries(multipageMap)) {
  for (let id of ids) {
    if (!idToSection[id]) {
      idToSection[id] = section;
    }
  }
}
if (location.hash) {
  let targetSec = idToSection[location.hash.substring(1)];
  if (targetSec != null) {
    let match = location.pathname.match(/([^/]+)\.html?$/);
    if ((match != null && match[1] !== targetSec) || location.pathname.endsWith('/multipage/')) {
      window.navigating = true;
      location = (targetSec === 'index' ? './' : targetSec + '.html') + location.hash;
    }
  }
}

