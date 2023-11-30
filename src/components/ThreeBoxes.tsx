export default function ThreeBoxes() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="card">
                        <div className="card-container">
                            <h3>About TC54</h3>
                            <p><a href="https://www.ecma-international.org/technical-committees/tc54/">Ecma Technical Committee 54</a> is chartered to standardize the <a href="https://cyclonedx.org/">OWASP CycloneDX</a> Bill of Materials specification, standards and algorithms that advance transparency and identity, and the sharing of transparency information across the supply chain.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <h3>Contribute</h3>
                            <p>TC54 welcomes contributions from the community. We encourage organizations and individuals to <a href="/contribute">contribute</a> to existing proposals, documentation, and specification feature ideas. To participate in TC54 meetings as a member, <a href="https://ecma-international.org/about-ecma/join-ecma/">join Ecma</a>.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <h3>Standards</h3>
                            <p>TODO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
