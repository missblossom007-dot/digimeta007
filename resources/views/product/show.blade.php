<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .card { border: 1px solid #ddd; padding: 20px; border-radius: 8px; max-width: 600px; }
        .detail { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .btn { padding: 10px 20px; text-decoration: none; display: inline-block; margin-right: 10px; border-radius: 4px; }
        .btn-primary { background-color: #4CAF50; color: white; }
        .btn-secondary { background-color: #6c757d; color: white; }
    </style>
</head>
<body>
    <h1>Product Details</h1>

    <div class="card">
        <div class="detail">
            <div class="label">ID:</div>
            <div class="value">{{ $product->id }}</div>
        </div>

        <div class="detail">
            <div class="label">Name:</div>
            <div class="value">{{ $product->name }}</div>
        </div>

        <div class="detail">
            <div class="label">Description:</div>
            <div class="value">{{ $product->description ?? 'N/A' }}</div>
        </div>

        <div class="detail">
            <div class="label">Price:</div>
            <div class="value">${{ number_format($product->price, 2) }}</div>
        </div>

        <div class="detail">
            <div class="label">Stock:</div>
            <div class="value">{{ $product->stock }}</div>
        </div>

        <div class="detail">
            <div class="label">Created:</div>
            <div class="value">{{ $product->created_at->format('Y-m-d H:i:s') }}</div>
        </div>

        <div class="detail">
            <div class="label">Updated:</div>
            <div class="value">{{ $product->updated_at->format('Y-m-d H:i:s') }}</div>
        </div>
    </div>

    <div style="margin-top: 20px;">
        <a href="{{ route('products.edit', $product) }}" class="btn btn-primary">Edit</a>
        <a href="{{ route('products.index') }}" class="btn btn-secondary">Back to List</a>
    </div>
</body>
</html>
