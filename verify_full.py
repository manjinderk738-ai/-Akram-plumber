from playwright.sync_api import sync_playwright
import time
import subprocess

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})

        page.on("console", lambda msg: print(f"Browser Console: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Browser Error: {exc}"))

        # Start the development server as a background process
        server_process = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        # Wait for the server to start
        time.sleep(3)

        try:
            page.goto('http://localhost:5173')

            # Wait for initial load
            page.wait_for_load_state('networkidle')
            time.sleep(2)

            # Take full page screenshot
            page.screenshot(path='full_page_premium_top.png')

            # Scroll down to trigger all whileInView animations
            for i in range(1, 10):
                page.evaluate(f'window.scrollTo(0, {i * 800})')
                time.sleep(1)

            page.screenshot(path='full_page_premium_bottom.png', full_page=True)
            print("Successfully captured screenshot.")

        finally:
            server_process.terminate()
            browser.close()

if __name__ == "__main__":
    verify_frontend()
