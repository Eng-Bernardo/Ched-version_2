import os
from PIL import Image

def optimize_images(directory, max_size_kb=500):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                try:
                    file_size = os.path.getsize(filepath)
                    if file_size > max_size_kb * 1024:
                        print(f"Optimizing {filepath} ({file_size / 1024:.2f} KB)...")
                        img = Image.open(filepath)
                        
                        # Resize if very large (e.g. > 1920px width)
                        if img.width > 1920:
                            ratio = 1920 / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                        
                        # Save with optimization
                        if filepath.lower().endswith('.png'):
                            # Convert to P mode (palette) for PNGs to strictly reduce size if it's not transparent gradient reliant
                            # But for safety, just optimize=True
                            img.save(filepath, optimize=True, quality=85)
                        else:
                            img.save(filepath, optimize=True, quality=85)
                            
                        new_size = os.path.getsize(filepath)
                        print(f"Reduced to {new_size / 1024:.2f} KB")
                except Exception as e:
                    print(f"Error optimizing {filepath}: {e}")

if __name__ == "__main__":
    print("Starting optimization...")
    optimize_images("public")
    optimize_images("src/assets")
    print("Done.")
